import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Authorization, Basket, Main, Registration } from './pages';
import styled from 'styled-components';
import { Product } from './pages/product/product';

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

export const App = () => {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/authorization" element={<Authorization />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/product" element={<Product />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/editing" element={<div>Удаление/редактирование</div>} />
				</Routes>
			</Page>
		</AppColumn>
	);
};
