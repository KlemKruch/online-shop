import { ACTION_TYPE } from './action-type';

export const deleteFromBasket = (productData) => ({
	type: ACTION_TYPE.DELETE_FROM_BASKET,
	payload: productData,
});
