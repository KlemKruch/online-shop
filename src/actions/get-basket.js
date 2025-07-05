import { ACTION_TYPE } from './action-type';

export const getBasket = (productData) => ({
	type: ACTION_TYPE.GET_BASKET,
	payload: productData,
});
