import { ROLE } from '../constants';

export const addUser = (login, password) =>
	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			role_id: ROLE.CLIENT,
			basket: [],
		}),
	}).then((createdUser) => createdUser.json());
