import { ACTION_TYPE } from '../actions';

const initialProductState = {
	id: '',
	name: '',
	amount: 0,
	price: '',
	image: null,
	category: '',
	inBasket: 0,
};

export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.ADD_TO_BASKET:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
