export const addProduct = (productName, productAmount, productPrice, productImage, productCategory, productDescription) =>
	fetch('http://localhost:3000/products', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			name: productName,
			amount: productAmount,
			price: productPrice,
			image: productImage,
			category: productCategory,
			description: productDescription,
		}),
	});
