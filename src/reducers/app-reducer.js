import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
	isLoading: true,
	isSearch: false,
	searchInput: '',
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT: {
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		}
		case ACTION_TYPE.IS_LOADING: {
			return {
				...state,
				isLoading: false,
			};
		}
		case ACTION_TYPE.SET_SEARCH_INPUT:
			return {
				...state,
				searchInput: action.payload,
			};
		case ACTION_TYPE.START_SEARCH:
			return {
				...state,
				isSearch: true,
			};
		case ACTION_TYPE.STOP_SEARCH:
			return {
				...state,
				isSearch: false,
			};
		default:
			return state;
	}
};
