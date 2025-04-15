import { ACTION_TYPE } from './action-type';

export const openProductCard = (productData) => ({
	type: ACTION_TYPE.OPEN_PRODUCT_CARD,
	payload: productData,
});
