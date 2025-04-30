import { ACTION_TYPE } from './action-type';

export const increaseAmountInBasket = (productData) => ({
	type: ACTION_TYPE.INCREASE_AMOUNT,
	payload: productData,
});
