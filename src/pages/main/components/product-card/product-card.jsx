import { Link } from 'react-router-dom';
import { Button, H2 } from '../../../../components';
import styled from 'styled-components';

const ProductCardContainer = ({ className, product }) => {
	const { id, image, name, price } = product;
	return (
		<Link to={`/product/${id}`} className={className}>
			<img src={image} alt="Фото товара" className="image" />
			<div className="name-and-price">
				<div className="price">{price}₽</div>
				<H2 fontsize="13px" margin="2px 0 6px 5px" color="#5c5740" children={name} />
			</div>
		</Link>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	background-color: white;
	margin: 10px 0 20px 25px;
	border-radius: 7px;
	height: 250px;
	width: 200px;
	-webkit-box-shadow: 0px 0px 11px 5px rgba(82, 80, 46, 0.2);
	-moz-box-shadow: 0px 0px 11px 5px rgba(82, 80, 46, 0.2);
	box-shadow: 0px 0px 11px 5px rgba(82, 80, 46, 0.2);

	&:hover {
		filter: opacity(0.5);
	}

	& .image {
		width: 100%;
		height: 160px;
		border-radius: 7px 7px 0 0;
	}

	& .name-and-price {
		width: 200px;
		height: 67px;
		padding: 0 10px;
	}

	& .prise-and-buttons {
		display: flex;
		padding: 0 5px;
		justify-content: space-between;
	}

	& .price {
		margin-top: 5px;
		width: 100%;
		height: 21px;
		font-size: 19px;
		color: #7d2d36;
		border-bottom: 1px solid #7d2d36;
	}

	& .class {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 60px;
		padding: 0 7px;
		border-radius: 5px;
		background-color: #ededed;
	}

	& .text {
		font-size: 15px;
		margin: 5px 0;
	}
`;
