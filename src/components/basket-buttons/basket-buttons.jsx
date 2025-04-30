import { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { selectBasket } from '../../selectors';
import { deleteFromBasket } from '../../actions';
import { decreaseAmount, increaseAmount, addProductToBasket } from '../../utils';
import { Button } from '../button/button';
import styled from 'styled-components';

const BasketButtonsContainer = ({ className, product }) => {
	const [quantityProductsInBasket, setQuantityProductsInBasket] = useState(0);
	const [productToBeRemoved, setProductToBeRemoved] = useState('');
	const [productInBasket, setProductInBasket] = useState(false);
	const basket = useSelector(selectBasket);
	const dispatch = useDispatch();

	console.log(basket);

	useLayoutEffect(() => {
		if (quantityProductsInBasket === 0) {
			const newBasket = basket.filter((productInBasket) => productInBasket.id !== productToBeRemoved.id);
			dispatch(deleteFromBasket(newBasket));
		}
	}, [quantityProductsInBasket, dispatch]);

	// const productInBaskett = basket.map((productInBasket) => productInBasket.id === product.id ? true : false)
	// console.log(productInBasket);

	const increaseAmountProduct = (productData) => {
		basket.map((product) => {
			if (product.id === productData.id) {
				increaseAmount(productData);
				setQuantityProductsInBasket(productData.inBasket);
			}
		});
	};

	const removeProductFromBasket = (productData) => {
		basket.map((product) => {
			if (product.id === productData.id) {
				if (product.inBasket > 0) {
					decreaseAmount(productData);
					setProductToBeRemoved(productData);
					setQuantityProductsInBasket(productToBeRemoved.inBasket);
				}
			}
		});
	};

	const addProduct = (productData, dispatch) => {
		basket.map((product) => {
			if (product.id === productData.id) {
				increaseAmount(productData);
			}
			return;
		});

		addProductToBasket(productData, dispatch);
		setProductInBasket(true);
	};

	return (
		<div className={className}>
			{productInBasket ? (
				<>
					<CiCircleMinus onClick={() => removeProductFromBasket(product)} />
					<div className="text">{product.inBasket}</div>
					<CiCirclePlus onClick={() => increaseAmountProduct(product)} />
				</>
			) : (
				<Button children="Купить" onClick={() => addProduct(product, dispatch)} />
			)}
		</div>
	);
};

export const BasketButtons = styled(BasketButtonsContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 28px;
	width: 100px;
	padding: 0 7px;
	border-radius: 5px;
	color: #5c5740;

	& .text {
		font-size: 15px;
		margin: 5px 0;
	}
`;
