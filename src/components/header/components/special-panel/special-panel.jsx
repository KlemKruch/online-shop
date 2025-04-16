import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../icon/icon';
import { selectUserLogin, selectUserRole, selectSession } from '../../../../selectors';
import { ROLE } from '../../../../bff/constants';
import { logout } from '../../../../actions';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className }) => {
	const role = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectSession);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout(session));

		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			{role !== ROLE.GUEST ? (
				<Link to="/basket">
					<Icon id="fa-shopping-basket" children="Корзина" />
				</Link>
			) : null}
			{role === ROLE.GUEST ? (
				<>
					<Link to="/registration">
						<Icon id="fa-user-circle-o" children="Регистрация" />
					</Link>
					<Link to="/authorization">
						<Icon id="fa-sign-in" children="Войти" />
					</Link>
				</>
			) : (
				<>
					<Icon id="fa-user-circle-o" children={login} />
					<Icon id="fa-sign-in" children="Выйти" onClick={onLogout} />
				</>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: right;
	width: 250px;
	margin-left: 11px;
`;
