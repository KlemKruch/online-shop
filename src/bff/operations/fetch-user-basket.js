import { getBasket } from '../api/get-basket';

export const fetchUserBasket = async (userId) => {
	const user = await getBasket(userId);

	return {
		error: null,
		res: user.basket,
	};
};
