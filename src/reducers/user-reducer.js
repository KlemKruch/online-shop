import { ACTION_TYPE } from '../actions';
import { ROLE } from '../bff/constants';

const initialUserState = {
	id: null,
	login: null,
	password: null,
	roleId: ROLE.GUEST,
	session: null,
	basket: [],
};

export const userReducer = (state = initialUserState, action) => {
	let newBasket = [...state.basket];

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
		case ACTION_TYPE.ADD_TO_BASKET:
			newBasket.push(action.payload);
			return {
				...state,
				basket: newBasket,
			};
		case ACTION_TYPE.INCREASE_AMOUNT:
			return {
				...state,
				basket: action.payload,
			};
		case ACTION_TYPE.DELETE_FROM_BASKET:
			return {
				...state,
				basket: action.payload,
			};
		default:
			return state;
	}
};
