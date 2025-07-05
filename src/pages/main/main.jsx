import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Loader } from '../../components';
import { ProductCard, Category } from './components';
import { fetchCategories, fetchProducts } from '../../bff/operations';
import { sortAlphabetically, sortByCategory } from '../../utils';
import { setIsLoading, setProducts, STOP_SEARCH } from '../../actions';
import { selectIsLoading, selectIsSearch, selectProducts, selectSearchInput } from '../../selectors';
import { CiSliderHorizontal } from 'react-icons/ci';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const isLoading = useSelector(selectIsLoading);
	const searchInput = useSelector(selectSearchInput);
	const productsFromServer = useSelector(selectProducts);
	const isSearch = useSelector(selectIsSearch);

	const dispatch = useDispatch();

	const [categories, setCategories] = useState([]);
	const [sortProductsFromCategory, setSortProductsFromCategory] = useState([]);
	const [sortProductsFromAlphabetically, setSortProductsFromAlphabetically] = useState([]);
	const [isSortFromCategory, setIsSortFromCategory] = useState(false);
	const [isSortFromAlphabetically, setIsSortFromAlphabetically] = useState(false);

	useLayoutEffect(() => {
		fetchCategories().then(({ res }) => setCategories(res));
		fetchProducts().then(({ res }) => dispatch(setProducts(res)));

		dispatch(setIsLoading(false));
	}, [isSortFromAlphabetically, dispatch]);

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
		setIsSortFromAlphabetically(!isSortFromAlphabetically);
	};

	const resetAllSorting = () => {
		setIsSortFromCategory(false);
		setIsSortFromAlphabetically(false);
		dispatch(STOP_SEARCH());
	};

	const products = isSortFromAlphabetically
		? sortProductsFromAlphabetically
		: isSortFromCategory
			? sortProductsFromCategory
			: productsFromServer;

	const searchProducts = productsFromServer.filter((product) => {
		return product.name.toLowerCase().includes(searchInput.toLowerCase());
	});

	return isLoading ? (
		<Loader />
	) : (
		<div className={className}>
			<div className="sorting">
				<Icon onClick={() => sortProductsAlphabetically()} size="25px" margin="0 23px 0 0">
					<CiSliderHorizontal />
				</Icon>
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
				{(isSearch ? searchProducts : products).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	.sorting {
		display: flex;
		width: 1100px;
		justify-content: right;
	}

	h5 {
		font-weight: 200;
		font-size: 16px;
		margin: 0 10px;
		cursor: pointer;
	}

	.product-categories {
		background-color: white;
		border-radius: 7px;
		width: 200px;
		height: 528px;
		text-align: center;
		position: fixed;
		margin-top: 10px;
	}

	.categories-name {
		padding: 10px 0;
		margin: 0;
		border-bottom: 1px solid #d9d9d9;
	}

	.products-block {
		display: flex;
		flex-wrap: wrap;
		margin-left: 200px;
	}
`;
