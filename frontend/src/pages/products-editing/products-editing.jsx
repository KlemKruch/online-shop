import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProductAsync, setIsLoading, setProducts } from '../../actions';
import { selectIsLoading, selectProducts, selectUserRole } from '../../selectors';
import { MainBlock, Loader, AccessDenied } from '../../components';
import { Products } from './components';
import { request } from '../../utils/request';
import { categories } from '../../constants/categories';
import { ROLES } from '../../constants/roles';
import styled from 'styled-components';

const ProductsEditingContainer = ({ className }) => {
	const isLoading = useSelector(selectIsLoading);
	const userRole = useSelector(selectUserRole);
	const products = useSelector(selectProducts);

	const navigate = useNavigate();

	const isModerator = userRole === ROLES.MODERATOR;

	const dispatch = useDispatch();

	useEffect(() => {
		request('/api/products').then((products) => dispatch(setProducts(products.data)));

		dispatch(setIsLoading(false));
	}, [dispatch]);

	const deleteProduct = (productId) => {
		dispatch(deleteProductAsync(productId)).then(() => navigate('/'));
	};
	return (
		<MainBlock>
			{isModerator ? (
				<div className={className}>
					{isLoading ? (
						<Loader />
					) : (
						<div>
							<div className="edit-form">
								{products.map(({ _id, name, amount, price, image, category, description }) => (
									<Products
										key={_id}
										id={_id}
										name={name}
										description={description}
										amount={amount}
										price={price}
										image={image}
										category={category}
										categories={categories}
										deleteProduct={deleteProduct}
									/>
								))}
							</div>
						</div>
					)}
				</div>
			) : (
				<AccessDenied children="Доступ только для модератора." />
			)}
		</MainBlock>
	);
};

export const ProductsEditing = styled(ProductsEditingContainer)`
	width: 100%;
	color: #5c5740;
	padding: 15px 20px;

	.form-to-add {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		padding: 10px;
		width: 290px;
		height: 500px;
	}

	.edit-form {
		width: 100%;
	}
`;
