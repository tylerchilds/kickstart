export function inject(func) {
	const b64moduleData = "data:text/javascript;base64," + btoa(func);
	return import(b64moduleData);
}

export function actionScript($) {
  $.when('click', '[data-script]', async (event) => {
    const { action, script } = event.target.dataset
    const dispatch = (await import(script))[action]
    dispatch(event, $)
  })
}
