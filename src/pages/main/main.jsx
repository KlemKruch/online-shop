import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Loader } from '../../components';
import { ProductCard, Category } from './components';
import { fetchCategories, fetchProducts } from '../../bff/operations';
import { sortAlphabetically, sortByCategory } from '../../utils';
import { setIsLoading } from '../../actions';
import { selectIsLoading } from '../../selectors';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

	const [categories, setCategories] = useState([]);
	const [productsFromServer, setProductsFromServer] = useState([]);
	const [sortProductsFromCategory, setSortProductsFromCategory] = useState([]);
	const [sortProductsFromAlphabetically, setSortProductsFromAlphabetically] = useState([]);
	const [isSortFromCategory, setIsSortFromCategory] = useState(false);
	const [isSortFromAlphabetically, setIsSortFromAlphabetically] = useState(false);

	useEffect(() => {
		fetchCategories().then(({ res }) => setCategories(res));
		fetchProducts().then(({ res }) => setProductsFromServer(res));

		dispatch(setIsLoading(false));
	}, []);

	const sortProductFromCategory = (idCategory) => {
		setIsSortFromAlphabetically(false);

		setSortProductsFromCategory(sortByCategory(productsFromServer, idCategory));
		setIsSortFromCategory(true);
	};

	const sortProductsAlphabetically = () => {
		let arrayForSorting;

		if (!isSortFromCategory) {
			arrayForSorting = productsFromServer;
		} else {
			arrayForSorting = sortProductsFromCategory;
		}

		setSortProductsFromAlphabetically(sortAlphabetically(arrayForSorting));
		setIsSortFromAlphabetically(true);
	};

	const resetAllSorting = () => {
		setIsSortFromCategory(false);
		setIsSortFromAlphabetically(false);
	};

	const products = isSortFromAlphabetically
		? sortProductsFromAlphabetically
		: isSortFromCategory
			? sortProductsFromCategory
			: productsFromServer;

	return isLoading ? (
		<Loader />
	) : (
		<main className={className}>
			<div className="sorting">
				<Icon id="fa-sort-amount-desc" margin="0 50px 0 0" fontSize="15px" onClick={() => sortProductsAlphabetically()} />
			</div>
			<div className="product-categories">
				<h5 className="categories-name" onClick={() => resetAllSorting()}>
					Категории
				</h5>
				{categories.map(({ name, id }) => (
					<Category key={id} name={name} onClick={() => sortProductFromCategory(id)} />
				))}
			</div>
			<div className="products-block">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
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
		font-size: 16px;
		margin: 0 10px;
		cursor: pointer;
	}

	& .product-categories {
		background-color: white;
		border-radius: 7px;
		width: 200px;
		height: 528px;
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
		flex-wrap: wrap;
		margin-left: 200px;
	}
`;
