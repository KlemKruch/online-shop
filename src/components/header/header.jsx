import { Logo, Search, SpecialPanel } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<Search />
			<SpecialPanel />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	position: fixed;
	top: 0;
	width: 1100px;
	height: 115px;
	padding: 10px 20px;
	border-radius: 0 0 7px 7px;
	background-color: white;
	-webkit-box-shadow: 0px 3px 8px -1px rgba(34, 60, 80, 0.07);
	-moz-box-shadow: 0px 3px 8px -1px rgba(34, 60, 80, 0.07);
	box-shadow: 0px 3px 8px -1px rgba(34, 60, 80, 0.07);
`;
