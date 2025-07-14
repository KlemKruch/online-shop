import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MainBlock, H2, Loader, Button } from '../../components';
import { selectIsLoading, selectProduct, selectUserRole, selectUserId, selectBasket } from '../../selectors';
import { loadedProductAsync, setIsLoading, getBasket } from '../../actions';
import { request } from '../../utils/request';
import { ROLES } from '../../constants/roles';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	const isLoading = useSelector(selectIsLoading);
	const product = useSelector(selectProduct);
	const userRole = useSelector(selectUserRole);
	const userId = useSelector(selectUserId);
	const basket = useSelector(selectBasket);

	const dispatch = useDispatch();
	const params = useParams();

	const { name, image, price, description } = product;

	useLayoutEffect(() => {
		dispatch(setIsLoading(true));

		if (userRole === ROLES.GUEST) {
			dispatch(setIsLoading(false));
		} else {
			request('/api/users').then(({ data }) => {
				const user = data.find((userData) => userData.id === userId);

				if (user) {
					dispatch(getBasket(user.basket));
				}

				return dispatch(setIsLoading(false));
			});
		}

		dispatch(loadedProductAsync(params.id));
	}, [dispatch, params.id, userId, product.amount]);

	const isGuest = userRole !== ROLES.GUEST ? true : false;

	const productIsInTheBasket = basket.some((productData) => productData.id === product._id);

	const addProduct = (productData, userId) => {
		const productToAddToBasket = {
			id: productData._id,
			name: productData.name,
			quantityInBasket: 1,
			price: productData.price,
			image: productData.image,
		};

		const newBasket = [...basket, productToAddToBasket];

		dispatch(getBasket(newBasket));

		request(`/api/users/${userId}`, 'PATCH', { basket: newBasket });
	};

	return isLoading ? (
		<Loader />
	) : (
		<MainBlock className={className}>
			<img src={image} alt="Фото товара" />
			<div className="product-information">
				<H2 children={name} margin="0 0 20px 0" />
				<div className="product-description">{description}</div>
				<div className="text">Цена: {price}₽</div>
				<div>
					{isGuest ? (
						<div className="block-button">
							{!productIsInTheBasket ? (
								<Button children="Купить" onClick={() => addProduct(product, userId)} />
							) : (
								<Link to="/basket">
									<div className="text-link-to-basket">Товар в корзине</div>
								</Link>
							)}
						</div>
					) : (
						<Link to="/registration" className="text-link">
							Чтобы купить товар пройдите регистрацию на нашем сайте
						</Link>
					)}
				</div>
			</div>
		</MainBlock>
	);
};

export const ProductCard = styled(ProductContainer)`
	img {
		width: 440px;
		height: 350px;
		border-radius: 7px;
		margin: 50px 70px 50px 30px;
	}

	.product-information {
		width: 560px;
		height: 355px;
		margin: 50px 0 50px 0;
		display: flex;
		flex-direction: column;
	}

	.product-description {
		margin: 20px 0;
		padding: 15px 15px 30px 15px;
		border: 1px solid #d9d9d9;
		font-size: 15px;
		border-radius: 7px;
		width: 510px;
		height: 170px;
		text-align: justify;
	}

	.text {
		margin: 10px 0;
	}

	.text-link {
		display: flex;
		justify-content: flex-end;
		font-size: 14px;
		margin-top: 20px;
		padding: 0 47px 0 0;
		align-items: flex-end;

		&:hover {
			color: #825a5a;
		}
	}

	.block-button {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
		padding: 0 47px 0 0;
	}

	.text-link-to-basket {
		color: #5c5740;
		padding: 4px 6px;

		&:hover {
			color: #8f5e6d;
			padding: 4px 6px;
		}
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28px;
		padding: 0 7px;
		border-radius: 5px;
		color: #5c5740;
	}

	.amount {
		font-size: 15px;
		margin: 10px 10px;
	}
`;
