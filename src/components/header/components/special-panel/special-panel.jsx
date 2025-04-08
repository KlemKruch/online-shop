import { Link } from 'react-router-dom';
import { Icon } from '../../../icon/icon';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<Link to="/basket">
				<Icon id="fa-shopping-basket" children="Корзина" />
			</Link>
			<Link to="/registration">
				<Icon id="fa-user-circle-o" children="Регистрация" />
			</Link>
			<Link to="/authorization">
				<Icon id="fa-sign-in" children="Войти" />
			</Link>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: right;
	width: 250px;
	margin-left: 11px;
`;
