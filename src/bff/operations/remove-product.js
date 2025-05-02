import { deleteProductFromServerAsync } from '../api';

export const removeProduct = async (productId) => {
	deleteProductFromServerAsync(productId);

	return {
		error: null,
		res: true,
	};
};
