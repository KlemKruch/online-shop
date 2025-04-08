import { Button, H2, Icon } from '../../components';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const navigate = useNavigate();
	useEffect(() => {}, []);

	return (
		<main className={className}>
			<div className="sorting">
				<h5></h5>
				<Icon id="fa-sort-amount-desc" margin="0 50px 0 0" fontSize="15px" />
			</div>
			<div className="product-categories">
				<h5 className="categories-name">Категории</h5>
			</div>
			<div className="products-block">
				<div className="product">
					<div className="image"></div>
					<div className="name-and-price">
						<H2 margin="0 0 60px 0" fontSize="20px" color="#5c5740" children="Аромадиффузор" />
						<div className="prise-and-buttons">
							<div className="price">100₽</div>
							<Icon id="fa-shopping-basket" margin="49px 0 0 10px" />
						</div>
					</div>
					<Button children="Открыть карточку" margin="128px 0 0 0" onClick={() => navigate('/product')} />
				</div>
				<div className="product">Карточка товара</div>
				<div className="product">Карточка товара</div>
				<div className="product">Карточка товара</div>
				<div className="product">Карточка товара</div>
				<div className="product">Карточка товара</div>
			</div>
		</main>
	);
};

export const Main = styled(MainContainer)`
	& .sorting {
		display: flex;
		width: 1100px;
		justify-content: right;
	}

	& h5 {
		font-weight: 200;
		font-size: 14px;
		margin: 0 10px;
	}

	& .product-categories {
		background-color: white;
		border: 1px solid white;
		border-radius: 7px;
		width: 200px;
		height: 550px;
		text-align: center;
		position: fixed;
		margin-top: 10px;
	}

	& .categories-name {
		padding: 10px 0;
		margin: 0;
		border-bottom: 1px solid #d9d9d9;
	}

	& .products-block {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	& .product {
		display: flex;
		background-color: white;
		margin: 10px 0 20px 50px;
		border-radius: 7px;
		padding: 15px 15px;
		height: 200px;
		width: 850px;
	}

	& .image {
		width: 260px;
		height: 160px;
		margin: 5px;
		border-radius: 7px;
	}

	& .name-and-price {
		width: 300px;
		height: 160px;
		margin: 5px 20px;
	}

	& .prise-and-buttons {
		display: flex;
		height: 75px;
	}

	& .price {
		margin-top: 43px;
		padding: 6px 0;
		width: 80px;
		height: 35px;
		font-size: 18px;
		color: #5c5740;
		background-color: #cad6c4;
		border-radius: 7px;
		text-align: center;
	}
`;
