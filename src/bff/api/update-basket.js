export const updateBasket = (userId, productData) =>
	fetch(`http://localhost:3000/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			basket: productData,
		}),
	});
