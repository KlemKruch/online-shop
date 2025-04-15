import { ACTION_TYPE } from './action-type';

export const addToBasket = (productData) => ({
	type: ACTION_TYPE.ADD_TO_BASKET,
	payload: productData,
});
