import { server } from '../bff';
import { setProductData } from './set-product-data';

export const loadedProductAsync = (productId) => (dispatch) =>
	server.fetchProduct(productId).then((productData) => dispatch(setProductData(productData.res)));
