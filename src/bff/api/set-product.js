export const setProduct = (productId, newName, newAmount, newPrice, newImage, newCategory) =>
	fetch(`http://localhost:3000/products/${productId}`, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			id: productId,
			name: newName,
			amount: newAmount,
			price: newPrice,
			image: newImage,
			category: newCategory,
		}),
	});
