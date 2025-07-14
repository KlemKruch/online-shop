import { request } from '../utils/request';
import { setProductData } from './set-product-data';

export const loadedProductAsync = (productId) => (dispatch) =>
	request(`/api/products/${productId}`).then(({ data }) => {
		dispatch(setProductData(data));

		return data;
	});
