import { ACTION_TYPE } from './action-type';

export const setProducts = (products) => ({
	type: ACTION_TYPE.SET_PRODUCTS_DATA,
	payload: products,
});
