export const getProduct = (productId) =>
	fetch(`http://localhost:3000/products/${productId}`)
		.then((loadedProduct) => loadedProduct.json())
		.then((loadedProduct) => loadedProduct);
