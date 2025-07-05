import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header, AccessDenied } from './components';
import { Authorization, Basket, Main, Registration, ProductCard, ProductsEditing, UsersEditing, Favorites } from './pages';
import { setUser } from './actions';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1100px;
	min-height: 100%;
	margin: 0 auto;
`;

const Page = styled.div`
	padding: 120px 0 0;
`;

export const OnlineStore = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/authorization" element={<Authorization />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/product/:id" element={<ProductCard />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/products/editing" element={<ProductsEditing />} />
					<Route path="/users/editing" element={<UsersEditing />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<AccessDenied children="Такой страницы не существует" />} />
				</Routes>
			</Page>
		</AppColumn>
	);
};
