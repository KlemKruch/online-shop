import { useSelector, useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { AccessDenied, Button, H2, MainBlock, Loader } from '../../components';
import { selectUserId, selectUserRole, selectBasket, selectIsLoading } from '../../selectors';
import { ProductCard } from './product-card/product-card';
import { getBasket, setIsLoading } from '../../actions';
import { request } from '../../utils/request';
import { ROLES } from '../../constants/roles';
import styled from 'styled-components';

const BasketContainer = ({ className }) => {
	const userId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);
	const basket = useSelector(selectBasket);
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();

	const isGuest = userRole === ROLES.GUEST;

	useLayoutEffect(() => {
		dispatch(setIsLoading(true));

		if (isGuest) {
			dispatch(setIsLoading(false));
		} else {
			request(`/api/users/${userId}`).then(({ data }) => {
				dispatch(getBasket(data.basket));

				return dispatch(setIsLoading(false));
			});
		}
	}, [dispatch, userId, isGuest]);

	const deleteProductInBasket = (productData) => {
		const newBasket = basket.filter((product) => product.id !== productData.id);
		dispatch(getBasket(newBasket));

		request(`/api/users/${userId}`, 'PATCH', { basket: newBasket });
	};

	const totalQuantityOfProducts = basket.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantityInBasket;
	}, 0);

	const totalSumOfProducts = basket.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantityInBasket * currentProduct.price;
	}, 0);

	return isLoading ? (
		<Loader />
	) : (
		<MainBlock className={className} padding="20px 15px">
			{isGuest ? (
				<AccessDenied children="Доступ только для авторизованных пользователей." />
			) : (
				<>
					<div className="block-products">
						{basket.map((product) => (
							<ProductCard product={product} key={product.id} deleteProductInBasket={deleteProductInBasket} />
						))}
					</div>
					<div className="basket-info">
						<div className="quantity-of-products">
							<H2 margin="30px 40px 0 15px" color="rgb(58, 55, 39)" children="Ваша корзина:" />
							<div className="text">Количество товаров: {totalQuantityOfProducts} шт</div>
						</div>
						<div className="block-sum">
							<H2 margin="30px 40px 0 15px" color="rgb(58, 55, 39)" children="Итоговая сумма:" />
							<div className="sum-products">{totalSumOfProducts}₽</div>
						</div>
						<div className="button">
							<Button margin="20px 10px" children="Оформить заказ" />
						</div>
					</div>
				</>
			)}
		</MainBlock>
	);
};

export const Basket = styled(BasketContainer)`
	.block-products {
		max-width: 790px;
		margin: 0 15px 20px 0;
	}

	.basket-info {
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		max-width: 260px;
		height: 350px;
	}

	.quantity-of-products {
		height: 115px;
		border-bottom: 1px solid #d9d9d9;
	}

	.text {
		margin: 10px 15px;
	}

	.block-sum {
		width: 100%;
		height: 95px;
	}

	.sum-products {
		margin: 15px 15px 25px 15px;
	}

	.button {
		display: flex;
		justify-content: center;
	}
`;
