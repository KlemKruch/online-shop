import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiSliderHorizontal } from 'react-icons/ci';
import { Icon, Loader } from '../../components';
import { ProductCard, Category, Search } from './components';
import { sortAlphabetically, sortByCategory } from '../../utils';
import { setIsLoading, setProducts, STOP_SEARCH } from '../../actions';
import { selectIsLoading, selectIsSearch, selectProducts, selectSearchInput } from '../../selectors';
import { request } from '../../utils/request';
import { categories } from '../../constants/categories';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const isLoading = useSelector(selectIsLoading);
	const searchInput = useSelector(selectSearchInput);
	const productsFromServer = useSelector(selectProducts);
	const isSearch = useSelector(selectIsSearch);

	const dispatch = useDispatch();

	const [sortProductsFromCategory, setSortProductsFromCategory] = useState([]);
	const [sortProductsFromAlphabetically, setSortProductsFromAlphabetically] = useState([]);
	const [isSortFromCategory, setIsSortFromCategory] = useState(false);
	const [isSortFromAlphabetically, setIsSortFromAlphabetically] = useState(false);

	useLayoutEffect(() => {
		dispatch(setIsLoading(true));

		request('/api/products').then(({ data }) => {
			dispatch(setProducts(data));
			return dispatch(setIsLoading(false));
		});
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
			<div className="categories">
				<div className="product-categories">
					<h5 className="categories-name" onClick={() => resetAllSorting()}>
						Категории
					</h5>
					{categories.map(({ name, id }) => (
						<Category key={id} name={name} onClick={() => sortProductFromCategory(id)} />
					))}
				</div>
			</div>
			<div>
				<div className="sorting-and-searching">
					<div className="search">
						<Search />
					</div>
					<Icon onClick={() => sortProductsAlphabetically()} size="25px" margin="0 23px 0 10px">
						<CiSliderHorizontal />
					</Icon>
				</div>
				<div className="products-block">
					{(isSearch ? searchProducts : products).map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	.categories {
		max-width: 200px;
		position: fixed;
	}

	.sorting-and-searching {
		display: flex;
		max-width: 900px;
		justify-content: flex-end;
		margin-bottom: 10px;
		margin-left: 200px;
	}

	.search {
		width: 665px;
		margin-left: 25px;
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
		margin-top: 0;
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
		max-width: 900px;
	}
`;
