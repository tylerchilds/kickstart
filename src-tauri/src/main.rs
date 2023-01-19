#![cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]

use tauri::{
	api::process::{Command, CommandEvent},
	Manager,
};
use tokio::sync::mpsc;
use tokio::sync::Mutex;
use tracing::info;
use tracing_subscriber;
use serde_json::json;
use gilrs::{Gilrs, Event, EventType};

struct AsyncProcInputTx {
	inner: Mutex<mpsc::Sender<String>>,
}

fn main() {
	tracing_subscriber::fmt::init();

	let (async_proc_input_tx, async_proc_input_rx) = mpsc::channel(1);
	let (async_proc_output_tx, mut async_proc_output_rx) = mpsc::channel(1);

	tauri::Builder::default()
		.manage(AsyncProcInputTx {
			inner: Mutex::new(async_proc_input_tx),
		})
		.invoke_handler(tauri::generate_handler![js2rs])
		.setup(|app| {
			/* two way channel from rust async*/
			tauri::async_runtime::spawn(async move {
				async_process_model(
					async_proc_input_rx,
					async_proc_output_tx,
					).await
			});

			/* one way channel from rust to javascript */
			let app_handle = app.handle();
			tauri::async_runtime::spawn(async move {
				loop {
					if let Some(output) = async_proc_output_rx.recv().await {
						rs2js(output, &app_handle);
					}
				}
			});

			/* pipe system level gamepad data from rust to javasccript */
			let app_handle = app.handle();
			tauri::async_runtime::spawn(async move {
				let mut gilrs = Gilrs::new().unwrap();

				// Iterate over all connected gamepads
				for (_id, gamepad) in gilrs.gamepads() {
					println!("{} is {:?}", gamepad.name(), gamepad.power_info());
				}

				loop {
					// Examine new events
					while let Some(Event { id, event, time: _time }) = gilrs.next_event() {
						match event {
							EventType::AxisChanged(axis, value, _code) => {
								let message = json!({
									"id": id.to_string(),
									"key": format!("{:?}", axis),
									"event": "AxisChanged",
									"value": value
								}).to_string();
								rs2js(message, &app_handle);
							}
							EventType::ButtonChanged(button, value, _code) => {
								let message = json!({
									"id": id.to_string(),
									"key": format!("{:?}", button),
									"event": "ButtonChanged",
									"value": value
								}).to_string();
								rs2js(message, &app_handle);
							}
							EventType::Connected => {
								let message = json!({
									"id": id.to_string(),
									"event": "Connected",
								}).to_string();
								rs2js(message, &app_handle);
							}
							_ => ()
						}

					}
				}
			});

			/* get sillyz.computer binary to run*/
			let window = app.get_window("main").unwrap();
			tauri::async_runtime::spawn(async move {
				let (mut rx, mut child) = Command::new_sidecar("sillyz.computer")
					.expect("failed to setup `sillyz.computer` sidecar")
					.spawn()
					.expect("Failed to spawn packaged node");

				while let Some(event) = rx.recv().await {
					if let CommandEvent::Stdout(line) = event {
						window
							.emit("message", Some(format!("'{}'", line)))
							.expect("failed to emit event");

					    // write to stdin
					    child.write("message from Rust\n".as_bytes()).unwrap();
					}
				}
			});

			Ok(())
		})
	.run(tauri::generate_context!())
	.expect("error while running tauri application");
}

fn rs2js<R: tauri::Runtime>(message: String, manager: &impl Manager<R>) {
	info!(?message, "rs2js");
	manager
		.emit_all("rs2js", format!("{}", message))
		.unwrap();
}

#[tauri::command]
async fn js2rs(
	message: String,
	state: tauri::State<'_, AsyncProcInputTx>,
) -> Result<(), String> {
	info!(?message, "js2rs");
	let async_proc_input_tx = state.inner.lock().await;
	async_proc_input_tx
		.send(message)
		.await
		.map_err(|e| e.to_string())
}

async fn async_process_model(
	mut input_rx: mpsc::Receiver<String>,
	output_tx: mpsc::Sender<String>,
) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
	while let Some(input) = input_rx.recv().await {
		let output = input;
		output_tx.send(output).await?;
	}

	Ok(())
}
