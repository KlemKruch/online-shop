import { Button, H2, Icon } from '../../components';
import styled from 'styled-components';

const BasketContainer = ({ className }) => {
	return (
		<main className={className}>
			<div className="block-products">
				<div className="product-card">
					<div className="image"></div>
					<div className="information">
						<div>
							<H2 margin="0 0 40px 15px" fontSize="20px" color="#5c5740" children="Аромадиффузор" />
							<div className="text">Цена:</div>
							<div className="text">Количество:</div>
						</div>
						<Icon id="fa-trash-o" margin="130px 0 0 330px" fontSize="25px" />
					</div>
					<div className="delete-button"></div>
				</div>
			</div>
			<div className="basket-info">
				<div className="quantity-of-products">
					<H2 fontSize="20px" margin="30px 40px 0 15px" color="rgb(58, 55, 39)" children="Ваша корзина:" />
					<div className="text">Количество товаров</div>
				</div>
				<div className="block-sum-and-registration">
					<div className="text">Итоговая сумма</div>
					<div className="sum">100₽</div>
					<Button margin="20px 10px" children="Оформить заказ" />
				</div>
			</div>
		</main>
	);
};

export const Basket = styled(BasketContainer)`
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	background-color: white;
	width: 100%;
	height: 550px;
	border-radius: 7px;
	color: rgb(58, 55, 39);

	& .block-products {
		width: 100%;
		margin: 20px 15px;
	}

	& .product-card {
		display: flex;
		margin-bottom: 20px;
		padding: 10px 15px;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		width: 100%;
		height: 185px;
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
		margin: 30px 15px;
	}

	& .sum {
		margin: 15px 15px 25px 15px;
	}

	& .image {
		width: 260px;
		height: 160px;
		background-color: black;
		border-radius: 7px;
	}

	& .information {
		display: flex;
		width: 520px;
		height: 160px;
	}
`;
