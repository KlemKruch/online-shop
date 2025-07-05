export const getSession = (id) =>
	fetch(`http://localhost:3000/sessions/${id}`)
		.then((loadedSession) => loadedSession.json())
		.then((loadedSession) => loadedSession);
