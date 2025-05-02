import { setProduct } from '../api';

export const updateProduct = async (productId, newName, newAmount, newPrice, newImage, newCategory) => {
	await setProduct(productId, newName, newAmount, newPrice, newImage, newCategory);

	console.log(productId, newName, newAmount, newPrice, newImage, newCategory);

	return {
		error: null,
		res: true,
	};
};
