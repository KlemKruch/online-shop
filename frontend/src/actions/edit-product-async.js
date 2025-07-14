import { request } from '../utils/request';
import { setProductData } from './set-product-data';

export const editProduct = (id, productData) => (dispatch) => {
	request(`/api/products/editing/${id}`, 'PATCH', productData).then(({ data }) => {
		dispatch(setProductData(data));

		return data;
	});
};
