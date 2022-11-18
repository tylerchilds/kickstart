export function inject(func) {
	const b64moduleData = "data:text/javascript;base64," + btoa(func);
	return import(b64moduleData);
}

