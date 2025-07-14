import { request } from '../utils/request';
import { setProductData } from './set-product-data';

export const addNewProduct = (productData) => (dispatch) => {
	request('/api/products/add', 'POST', productData).then(({ data }) => {
		dispatch(setProductData(data));

		return data;
	});
};
