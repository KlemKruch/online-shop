import { useSelector } from 'react-redux';
import { CiTrash, CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { BasketButtons, Button, H2, MainBlock } from '../../components';
import { selectBasket } from '../../selectors';
import styled from 'styled-components';

const BasketContainer = ({ className }) => {
	const basket = useSelector(selectBasket);

	return (
		<MainBlock className={className}>
			<div className="block-products">
				{basket.map((product) => (
					<div className="product-card" key={product.id}>
						<img src={product.image} alt="Фото товара" />
						<div className="information">
							<div>
								<H2 margin="0 0 10px 15px" fontsize="20px" children={product.name} />
								<div className="text">Цена: {product.price}</div>
								<div className="text">Количество: {product.inBasket}</div>
							</div>
							<div className="button-block">
								<div className="buttons-and-amount">
									<BasketButtons product={product} />
								</div>
								<CiTrash className="delete-product" />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="basket-info">
				<div className="quantity-of-products">
					<H2 margin="30px 40px 0 15px" color="rgb(58, 55, 39)" children="Ваша корзина:" />
					<div className="text">Количество товаров</div>
				</div>
				<div className="block-sum-and-registration">
					<div className="text">Итоговая сумма</div>
					<div className="sum">100₽</div>
					<Button margin="20px 10px" children="Оформить заказ" />
				</div>
			</div>
		</MainBlock>
	);
};

export const Basket = styled(BasketContainer)`
	& .block-products {
		width: 100%;
		margin: 0 15px 20px 15px;
	}

	& .product-card {
		display: flex;
		margin-top: 20px;
		padding: 10px 15px;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		width: 100%;
		height: 185px;
	}

	& .button-block {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-left: 10px;
	}

	& .buttons-and-amount {
		display: flex;
		width: 80px;
		justify-content: space-evenly;
	}

	& .button {
		font-size: 25px;
	}

	& .amount {
		line-height: 25px;
	}

	& .delete-product {
		font-size: 25px;
		margin-left: 20px;
	}

	& .basket-info {
		margin: 20px 15px;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		width: 300px;
		height: 350px;
	}

	& .quantity-of-products {
		height: 115px;
		border-bottom: 1px solid #d9d9d9;
	}

	& .text {
		margin: 10px 15px;
	}

	& .sum {
		margin: 15px 15px 25px 15px;
	}

	& img {
		width: 200px;
		height: 160px;
		background-color: black;
		border-radius: 7px;
	}

	& .information {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 160px;
	}
`;
