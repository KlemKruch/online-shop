import { deleteUserFromServerAsync } from '../api';

export const removeUser = async (userId) => {
	deleteUserFromServerAsync(userId);

	return {
		error: null,
		res: true,
	};
};
