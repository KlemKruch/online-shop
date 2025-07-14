import { ACTION_TYPE } from '../actions';

const initialUserState = {
	id: null,
	login: null,
	roleId: 3,
	basket: [],
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.LOGOUT: {
			return initialUserState;
		}
		case ACTION_TYPE.GET_BASKET: {
			return {
				...state,
				basket: action.payload,
			};
		}
		default:
			return state;
	}
};
