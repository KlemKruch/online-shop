const initialProductsState = {
	id: '',
	name: '',
	amount: null,
	price: '',
	image: null,
	category: '',
};

export const productsReducer = (state = initialProductsState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
