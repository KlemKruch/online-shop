export const searchInArrayById = (array, productId) => {
	return array.some((product) => product.id === productId);
};
