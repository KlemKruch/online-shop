import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, H2 } from '../../../../components';
import { addToBasket, openProductCard } from '../../../../actions';
import styled from 'styled-components';

const ProductCardContainer = ({ className, name, id, amount, price, image }) => {
	const [amountOfRemainingProducts, setAmountOfRemainingProducts] = useState(amount);
	const [isProductEnded, setIsProductEnded] = useState(false);

	const product = { id, name, quantity: 1, price, image };

	const dispatch = useDispatch();

	useEffect(() => {
		if (amountOfRemainingProducts === 0) {
			setIsProductEnded(true);
		}
	}, [amountOfRemainingProducts]);

	const BuyProduct = (productData) => {
		dispatch(addToBasket(productData));

		if (amountOfRemainingProducts > 0) {
			setAmountOfRemainingProducts(amountOfRemainingProducts - 1);
		} else {
			return;
		}
	};

	const openCardProduct = (productData) => {
		dispatch(openProductCard(productData));
	};

	return (
		<div className={className}>
			<img src={image} alt="Фото товара" className="image" />
			<div className="name-and-price">
				<H2 margin="0 0 60px 0" fontsize="20px" color="#5c5740" children={name} />
				<div className="prise-and-buttons">
					<div className="price">{price}₽</div>
					<Icon
						id="fa-shopping-basket"
						margin="49px 0 0 10px"
						disabled={isProductEnded}
						onClick={() => BuyProduct(product)}
					/>
				</div>
			</div>
			<Link to={`/product/${id}`}>
				<Button children="Открыть карточку" margin="128px 0 0 0" onClick={() => openCardProduct(product)} />
			</Link>
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	display: flex;
	background-color: white;
	margin: 10px 0 20px 50px;
	border-radius: 7px;
	padding: 15px 15px;
	height: 200px;
	width: 850px;

	& .image {
		width: 260px;
		height: 160px;
		margin: 5px;
		border-radius: 7px;
	}

	& .name-and-price {
		width: 300px;
		height: 160px;
		margin: 5px 20px;
	}

	& .prise-and-buttons {
		display: flex;
		height: 75px;
	}

	& .price {
		margin-top: 43px;
		padding: 6px 0;
		width: 80px;
		height: 35px;
		font-size: 18px;
		color: #5c5740;
		background-color: #cad6c4;
		border-radius: 7px;
		text-align: center;
	}
`;
