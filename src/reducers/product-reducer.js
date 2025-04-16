import { ACTION_TYPE } from '../actions';

const initialProductState = {
	id: '',
	name: '',
	amount: 0,
	price: '',
	image: null,
	category: '',
};

export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
