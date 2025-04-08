const initialProductsState = {
	id: '',
	name: '',
	quantity: '',
	price: '',
	image: '',
	category: '',
};

export const ProductsReducer = (state = initialProductsState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
