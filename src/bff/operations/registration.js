import { getUser, addUser } from '../api';
import { sessions } from '../sessions';

export const registration = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Такой логин уже занят.',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);
	console.log(user);

	const { login, password, role } = user;

	return {
		error: null,
		res: {
			login,
			password,
			role,
			session: sessions.create(user),
		},
	};
};
