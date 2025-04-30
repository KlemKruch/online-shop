import { getUsers } from '../api';

export const fetchUsers = async () => {
	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
