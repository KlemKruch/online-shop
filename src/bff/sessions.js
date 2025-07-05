import { addSession, getSession, deleteSession } from './api';

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50);

		addSession(hash, user);

		return hash;
	},
	async remove(id) {
		const session = await getSession(id);

		if (!session) {
			return;
		}

		deleteSession(session.id);
	},
};
