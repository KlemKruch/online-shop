import { getUser } from '../api';
import { sessions } from '../sessions';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'Такой пользователь не найден.',
			res: null,
		};
	}

	if (authPassword !== user.password) {
		return {
			error: 'Неверный пароль.',
			res: null,
		};
	}

	const { id, login, password } = user;

	return {
		error: null,
		res: {
			id,
			login,
			password,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
