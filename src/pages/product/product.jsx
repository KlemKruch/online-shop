import { H2 } from '../../components';
import { Button } from '../../components/button/button';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	return (
		<main className={className}>
			<div className="image"></div>
			<div className="product-information">
				<H2 children="Аромадиффузор" margin="0 0 20px 0" />
				<div className="product-description"></div>
				<div className="text">Количество: 5шт</div>
				<div className="text">Цена: 100₽</div>
				<Button margin="0 0 0 350px" children="Купить" />
			</div>
		</main>
	);
};

export const Product = styled(ProductContainer)`
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	border-radius: 7px;
	padding: 40px 20px;
	height: 500px;
	width: 1100px;
	background-color: white;

	& .image {
		width: 40%;
		border-radius: 7px;
		background-color: black;
		margin: 0 70px 0 0;
	}

	& .product-information {
		width: 565px;
	}

	& .product-description {
		margin-bottom: 20px;
		border-radius: 7px;
		background-color: grey;
		width: 90%;
		height: 250px;
	}

	& .text {
		margin: 10px 0;
	}
`;
