export const setProductToServer = (productId, newAmount) =>
	fetch(`http://localhost:3000/products/${productId}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			amount: newAmount,
		}),
	});
