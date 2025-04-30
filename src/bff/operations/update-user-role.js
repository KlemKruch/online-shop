import { setUserRole } from '../api';

export const updateUserRole = async (userId, newUserRoleId) => {
	await setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
