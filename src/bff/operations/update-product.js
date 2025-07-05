import { setProduct } from '../api';

export const updateProduct = async (productId, newName, newAmount, newPrice, newImage, newCategory, newDescription) => {
	await setProduct(productId, newName, newAmount, newPrice, newImage, newCategory, newDescription);

	return {
		error: null,
		res: true,
	};
};
