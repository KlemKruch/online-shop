import { ACTION_TYPE } from './action-type';

export const setSession = (hash) => ({
	type: ACTION_TYPE.SET_SESSION,
	payload: hash,
});
