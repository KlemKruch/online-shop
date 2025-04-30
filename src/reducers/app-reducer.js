import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
	isLoading: true,
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
		default:
			return state;
	}
};
