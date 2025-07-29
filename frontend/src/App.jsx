import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header, AccessDenied, MainBlock } from './components';
import { Authorization, Basket, Main, Registration, ProductCard, ProductsEditing, UsersEditing, AddProduct } from './pages';
import { setUser } from './actions';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 1100px;
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
					<Route path="/products/:id" element={<ProductCard />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/products/add" element={<AddProduct />} />
					<Route path="/products/editing" element={<ProductsEditing />} />
					<Route path="/users" element={<UsersEditing />} />
					<Route
						path="*"
						element={
							<MainBlock>
								<AccessDenied children="Такой страницы не существует" />
							</MainBlock>
						}
					/>
				</Routes>
			</Page>
		</AppColumn>
	);
};
