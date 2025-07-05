import { addProduct } from '../api';

export const addNewProduct = async (
	productName,
	productAmount,
	productPrice,
	productImage,
	productCategory,
	productDescription,
) => {
	await addProduct(productName, productAmount, productPrice, productImage, productCategory, productDescription);

	return {
		error: null,
		res: true,
	};
};
