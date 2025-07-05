import { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts, removeProduct } from '../../bff/operations';
import { setIsLoading } from '../../actions';
import { selectIsLoading, selectUserRole } from '../../selectors';
import { H2, MainBlock, Loader, AccessDenied } from '../../components';
import { FormToAddProduct, Products } from './components';
import { ROLE } from '../../bff/constants';
import styled from 'styled-components';

const ProductsEditingContainer = ({ className }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);

	const isLoading = useSelector(selectIsLoading);
	const userRole = useSelector(selectUserRole);

	const isAdmin = userRole === ROLE.MODERATOR;

	const dispatch = useDispatch();

	useLayoutEffect(() => {
		fetchProducts().then(({ res }) => setProducts(res));
		fetchCategories().then(({ res }) => setCategories(res));

		dispatch(setIsLoading(false));
	}, [dispatch, shouldUpdateUserList]);

	const deleteProduct = (productId) => {
		removeProduct(productId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};
	return (
		<MainBlock>
			{isAdmin ? (
				<div>
					{isLoading ? (
						<Loader />
					) : (
						<div className={className}>
							<div className="form-to-add">
								<H2>Добавить товар</H2>
								<FormToAddProduct categories={categories} />
							</div>
							<div className="edit-and-delete-form">
								{products.map(({ id, name, amount, price, image, category, description }) => (
									<Products
										key={id}
										id={id}
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
	display: flex;
	padding: 15px 20px;
	justify-content: space-between;
	width: 100%;
	color: #5c5740;

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

	.edit-and-delete-form {
		width: 750px;
		margin-left: 20px;
	}
`;
