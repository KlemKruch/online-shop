import { CiTrash } from 'react-icons/ci';
import { H2, Icon, BasketButtons } from '../../../components';
import styled from 'styled-components';

const ProductCardContainer = ({ className, product, deleteProductInBasket }) => {
	return (
		<div className={className} key={product.id}>
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
						<BasketButtons product={product} />
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
		width: 80px;
		justify-content: space-evenly;
	}
`;
