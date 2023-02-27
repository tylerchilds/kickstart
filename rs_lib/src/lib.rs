use gilrs::{Gilrs, Event, EventType};
use serde_json::json;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::{spawn_local};
use deno_bindgen::deno_bindgen;

#[deno_bindgen]
struct Input {
  a: i32,
  b: i32,
}

#[deno_bindgen]
fn mul(input: Input) -> i32 {
  input.a * input.b
}

// First up let's take a look of binding `console.log` manually, without the
// help of `web_sys`. Here we're writing the `#[wasm_bindgen]` annotations
// manually ourselves, and the correctness of our program relies on the
// correctness of these annotations!

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // The `console.log` is quite polymorphic, so we can bind it with multiple
    // signatures. Note that we need to use `js_name` to ensure we always call
    // `log` in JS.
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

fn bare_bones() {
    log("Hello from Rust!");
    log_u32(42);
    log_many("Logging", "many values!");
}

// Next let's define a macro that's like `println!`, only it works for
// `console.log`. Note that `println!` doesn't actually work on the wasm target
// because the standard library currently just eats all output. To get
// `println!`-like behavior in your app you'll likely want a macro like this.

macro_rules! console_log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

fn using_a_macro() {
    console_log!("Hello {}!", "world");
    console_log!("Let's print some numbers...");
    console_log!("1 + 3 = {}", 1 + 3);
}

#[deno_bindgen]
fn gamepads() {

						console_log!("Hello {}!", "gamepads");
	spawn_local(async move {
		let mut gilrs = Gilrs::new().unwrap();

		// Iterate over all connected gamepads
		for (_id, gamepad) in gilrs.gamepads() {
			println!("{} is {:?}", gamepad.name(), gamepad.power_info());
		}

		loop {
			while let Some(Event { id, event, time: _time }) = gilrs.next_event() {
				match event {
					EventType::AxisChanged(axis, value, _code) => {
						let message = json!({
							"id": id.to_string(),
							"key": format!("{:?}", axis),
							"event": "AxisChanged",
							"value": value
						}).to_string();
						console_log!("Hello {}!", "world");
					}
					EventType::ButtonChanged(button, value, _code) => {
						let message = json!({
							"id": id.to_string(),
							"key": format!("{:?}", button),
							"event": "ButtonChanged",
							"value": value
						}).to_string();
						console_log!("Hello {}!", "world");
					}
					EventType::Connected => {
						let message = json!({
							"id": id.to_string(),
							"event": "Connected",
						}).to_string();
						console_log!("Hello {}!", "world");
					}
					_ => ()
				}

			}
		}
	});
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

#[wasm_bindgen]
pub fn start() -> String {
    bare_bones();
    using_a_macro();
	return "hahhaa".into()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(1, 2);
        assert_eq!(result, 3);
    }
}
