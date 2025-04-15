import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT: {
			return {
				...state,
				onLogout: !state.wasLogout,
			};
		}
		default:
			return state;
	}
};
