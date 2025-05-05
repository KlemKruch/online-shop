import { ACTION_TYPE } from './action-type';

export const setSearchInput = (value) => ({
	type: ACTION_TYPE.SET_SEARCH_INPUT,
	payload: value,
});
