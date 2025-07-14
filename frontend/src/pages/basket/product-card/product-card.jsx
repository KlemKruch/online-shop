import { useDispatch, useSelector } from 'react-redux';
import { CiTrash, CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { H2, Icon } from '../../../components';
import { selectUserId, selectBasket } from '../../../selectors';
import { getBasket } from '../../../actions';
import { request } from '../../../utils/request';
import styled from 'styled-components';

const ProductCardContainer = ({ className, product, deleteProductInBasket }) => {
	const userId = useSelector(selectUserId);
	const basket = useSelector(selectBasket);
	const dispatch = useDispatch();

	const increaseQuantityProductInTheBasket = (productData) => {
		const newBasket = basket.map((product) => {
			if (product.id === productData.id) {
				const newQuantity = product.quantityInBasket + 1;

				return { ...product, quantityInBasket: newQuantity };
			}
			return product;
		});

		dispatch(getBasket(newBasket));

		request(`/api/users/${userId}`, 'PATCH', { basket: newBasket });
	};

	const decreaseQuantityProductInTheBasket = (productData) => {
		const newBasket = basket.map((product) => {
			if (product.id === productData.id) {
				const newQuantity = product.quantityInBasket - 1;

				return { ...product, quantityInBasket: newQuantity };
			}
			return product;
		});

		const readyBasket = newBasket.filter(({ quantityInBasket }) => quantityInBasket !== 0);

		dispatch(getBasket(readyBasket));

		request(`/api/users/${userId}`, 'PATCH', { basket: readyBasket });
	};
	return (
		<div className={className}>
			<div className="image">
				<img src={product.image} alt="Фото товара" />
			</div>
			<div className="product-information">
				<div>
					<H2 margin="0 0 10px 15px" fontsize="20px" children={product.name} />
					<div className="text">Цена: {product.price}</div>
					<div className="text">Количество: {product.amount}</div>
				</div>
				<div className="button-block">
					<div className="buttons">
						<Icon size="25px" onClick={() => decreaseQuantityProductInTheBasket(product)}>
							<CiCircleMinus />
						</Icon>
						<div className="amount">{product.quantityInBasket}</div>
						<Icon size="25px" onClick={() => increaseQuantityProductInTheBasket(product)}>
							<CiCirclePlus />
						</Icon>
					</div>
					<Icon size="25px" margin="0 0 0 20px" onClick={() => deleteProductInBasket(product)}>
						<CiTrash />
					</Icon>
				</div>
			</div>
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	display: flex;
	margin-bottom: 20px;
	padding: 10px 15px;
	border: 1px solid #d9d9d9;
	border-radius: 7px;
	width: 100%;
	height: 185px;

	.image {
		width: 200px;
		height: 160px;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 7px;
	}

	.product-information {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 160px;
		width: 586px;
	}

	.text {
		margin: 10px 15px;
	}

	.button-block {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-left: 10px;
	}

	.buttons {
		display: flex;
		color: #5c5740;
	}

	.amount {
		font-size: 15px;
		margin: 3px 0 0 10px;
	}
`;
