import { ACTION_TYPE } from '../actions';

const initialProductState = {
	id: '',
	name: '',
	amount: null,
	price: '',
	image: null,
	category: '',
};

export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_PRODUCT_CARD:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
