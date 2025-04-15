import { ACTION_TYPE } from '../actions';

const initialBasketState = {
	productId: null,
	product_name: null,
	price: null,
	quantity: 0,
	image: null,
};

export const basketReducer = (state = initialBasketState, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_TO_BASKET:
			return {
				...state,
				...action.payload,
				quantity: state.quantity + action.quantity,
			};
		case ACTION_TYPE.CLEAR_BASKET:
			return initialBasketState;
		default:
			return state;
	}
};
