import { ACTION_TYPE } from './action-type';

export const setIsLoading = (productData) => ({
	type: ACTION_TYPE.IS_LOADING,
	payload: productData,
});
