export const getSession = (hash) =>
	fetch(`http://localhost:3000/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession);
