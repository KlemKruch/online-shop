export const deleteSession = (sessionId) =>
	fetch(`http://localhost:3000/sessions/${sessionId}`, {
		method: 'DELETE',
	});
