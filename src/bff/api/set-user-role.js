export const setUserRole = (userId, newUserRoleId) =>
	fetch(`http://localhost:3000/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			role_id: newUserRoleId,
		}),
	});
