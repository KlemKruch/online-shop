export const deleteUserFromServerAsync = (userId) =>
	fetch(`http://localhost:3000/users/${userId}`, {
		method: 'DELETE',
	});
