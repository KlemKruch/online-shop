import { MainBlock, H2, Button } from '../../../../components';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	return (
		<MainBlock className={className}>
			<div className="image"></div>
			<div className="product-information">
				<H2 children="Аромадиффузор" margin="0 0 20px 0" />
				<div className="product-description"></div>
				<div className="text">Количество: 5шт</div>
				<div className="text">Цена: 100₽</div>
				<Button margin="0 0 0 350px" children="Купить" />
			</div>
		</MainBlock>
	);
};

export const Product = styled(ProductContainer)`
	& .image {
		width: 40%;
		border-radius: 7px;
		background-color: black;
		margin: 50px 70px 50px 30px;
	}

	& .product-information {
		width: 565px;
		margin: 50px 0 50px 0;
	}

	& .product-description {
		margin: 20px 0;
		border-radius: 7px;
		background-color: grey;
		width: 90%;
		height: 250px;
	}

	& .text {
		margin: 10px 0;
	}
`;
