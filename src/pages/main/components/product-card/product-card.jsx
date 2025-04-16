import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, H2 } from '../../../../components';
import { addToBasket } from '../../../../actions';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../bff/constants';
import styled from 'styled-components';

const ProductCardContainer = ({ className, name, id, amount, price, image, category }) => {
	const [amountOfRemainingProducts, setAmountOfRemainingProducts] = useState(amount);
	const [isProductEnded, setIsProductEnded] = useState(false);
	const userRole = useSelector(selectUserRole);

	const product = { id, name, price, image, amount, category };

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

	return (
		<div className={className}>
			<img src={image} alt="Фото товара" className="image" />
			<div className="name-and-price">
				<H2 fontsize="14px" margin="2px 0 6px 5px" color="#5c5740" children={name} />
				<div className="prise-and-buttons">
					<div className="price">{price}₽</div>
					{userRole !== ROLE.GUEST ? (
						<Icon
							id="fa-shopping-basket"
							disabled={isProductEnded}
							margin="0"
							fontSize="17px"
							onClick={() => BuyProduct(product)}
						/>
					) : null}
				</div>
			</div>
			<Link to={`/product/${id}`}>
				<Button children="Открыть карточку" width="185px" height="38px" margin="0 7px" />
			</Link>
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	background-color: white;
	margin: 10px 0 20px 25px;
	border-radius: 7px;
	height: 280px;
	width: 200px;
	-webkit-box-shadow: 0px 0px 11px 5px rgba(82, 80, 46, 0.2);
	-moz-box-shadow: 0px 0px 11px 5px rgba(82, 80, 46, 0.2);
	box-shadow: 0px 0px 11px 5px rgba(82, 80, 46, 0.2);

	& .image {
		width: 100%;
		height: 160px;
		border-radius: 7px 7px 0 0;
	}

	& .name-and-price {
		width: 200px;
		height: 67px;
	}

	& .prise-and-buttons {
		display: flex;
		padding: 0 5px;
		justify-content: space-between;
	}

	& .price {
		padding: 3px 0;
		width: 60px;
		height: 21px;
		font-size: 13px;
		color: #5c5740;
		background-color: #cad6c4;
		border-radius: 7px;
		text-align: center;
	}
`;
