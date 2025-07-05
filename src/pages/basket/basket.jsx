import { useSelector, useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { AccessDenied, Button, H2, MainBlock } from '../../components';
import { selectUserId, selectUserRole, selectBasket } from '../../selectors';
import { fetchUserBasket } from '../../bff/operations';
import { ProductCard } from './product-card/product-card';
import { ROLE } from '../../bff/constants';
import { updateBasket } from '../../bff/api';
import { getBasket } from '../../actions';
import styled from 'styled-components';

const BasketContainer = ({ className }) => {
	const userId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);
	const basket = useSelector(selectBasket);
	const dispatch = useDispatch();

	const isGuest = userRole === ROLE.GUEST;

	useLayoutEffect(() => {
		fetchUserBasket(userId).then(({ res }) => dispatch(getBasket(res)));
	}, [userId, userRole, dispatch]);

	const deleteProductInBasket = (productData) => {
		const products = basket.filter((product) => product.id !== productData.id);
		dispatch(getBasket(products));

		updateBasket(userId, products);
	};

	const totalQuantityOfProducts = basket.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantityInBasket;
	}, 0);

	const totalSumOfProducts = basket.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantityInBasket * currentProduct.price;
	}, 0);

	return (
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
		width: 790px;
		margin: 0 15px 20px 15px;
	}

	.basket-info {
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		width: 260px;
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
