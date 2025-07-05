import { getSessions } from '../api';

export const fetchSessions = async () => {
	const session = await getSessions();

	return {
		error: null,
		res: session,
	};
};
