import { useDispatch, useSelector } from 'react-redux';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { selectUserId, selectBasket } from '../../selectors';
import { updateBasket } from '../../bff/api';
import { getBasket } from '../../actions';
import styled from 'styled-components';

const BasketButtonsContainer = ({ className, product }) => {
	const userId = useSelector(selectUserId);
	const basket = useSelector(selectBasket);
	const dispatch = useDispatch();

	const productInBasket = basket.find(({ id }) => id === product.id);

	const increaseQuantityProductInTheBasket = (productData) => {
		const newBasket = basket.map((product) => {
			if (product.id === productData.id) {
				const newQuantity = product.quantityInBasket + 1;
				return { ...product, quantityInBasket: newQuantity };
			}
			return product;
		});

		updateBasket(userId, newBasket);
		dispatch(getBasket(newBasket));
	};

	const decreaseQuantityProductInTheBasket = (productData) => {
		const newBasket = basket.map((product) => {
			if (product.id === productData.id) {
				const newQuantity = product.quantityInBasket - 1;

				return { ...product, quantityInBasket: newQuantity };
			}
			return product
		});

		const readyBasket = newBasket.filter(({ quantityInBasket }) => quantityInBasket !== 0 )

		dispatch(getBasket(readyBasket));
		updateBasket(userId, readyBasket);

	};

	return (
		<div className={className}>
			<CiCircleMinus onClick={() => decreaseQuantityProductInTheBasket(product)} />
			<div className="amount">{productInBasket.quantityInBasket}</div>
			<CiCirclePlus onClick={() => increaseQuantityProductInTheBasket(product)} />
		</div>
	);
};

export const BasketButtons = styled(BasketButtonsContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 28px;
	padding: 0 7px;
	border-radius: 5px;
	color: #5c5740;

	.amount {
		font-size: 15px;
		margin: 10px 10px;
	}
`;
