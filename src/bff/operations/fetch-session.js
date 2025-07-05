import { getSession } from '../api';

export const fetchSession = async (sessionId) => {
	const session = await getSession(sessionId);

	return {
		error: null,
		res: session,
	};
};
