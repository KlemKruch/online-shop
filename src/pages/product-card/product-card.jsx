import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MainBlock, H2, Button } from '../../components';
import { selectProduct, selectUserRole } from '../../selectors';
import { loadedProductAsync } from '../../actions';
import { ROLE } from '../../bff/constants';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	const product = useSelector(selectProduct);
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const params = useParams();

	const { name, amount, image, price } = product;

	useEffect(() => {
		dispatch(loadedProductAsync(params.id));
	}, [dispatch, params.id]);

	return (
		<MainBlock className={className}>
			<img src={image} alt="Фото товара" />
			<div className="product-information">
				<H2 children={name} margin="0 0 20px 0" />
				<div className="product-description"></div>
				<div className="text">Количество: {amount}шт</div>
				<div className="text">Цена: {price}₽</div>
				<div className="button-or-text-link">
					{userRole !== ROLE.GUEST ? (
						<Button margin="0 0 0 350px" children="Купить" />
					) : (
						<Link to="/registration" className="text-link">
							Чтобы купить товар пройдите регистрацию на нашем сайте
						</Link>
					)}
				</div>
			</div>
		</MainBlock>
	);
};

export const ProductCard = styled(ProductContainer)`
	& img {
		width: 40%;
		border-radius: 7px;
		margin: 50px 70px 50px 30px;
	}

	& .product-information {
		width: 560px;
		margin: 50px 0 50px 0;
	}

	& .product-description {
		margin: 20px 0;
		border-radius: 7px;
		background-color: #d9d9d9;
		width: 90%;
		height: 250px;
	}

	& .text {
		margin: 10px 0;
	}

	& .button-or-text-link {
		display: flex;
		height: 76px;
		justify-content: flex-end;
		align-content: flex-end;
		flex-wrap: wrap;
		margin-right: 50px;
	}

	& .text-link {
		display: flex;
		justify-content: flex-end;
		font-size: 13px;
		margin: 20px 9px 0 0;
		padding: 2px 9px 0 0;
		align-items: flex-end;

		&:hover {
			color: #825a5a;
		}
	}
`;
