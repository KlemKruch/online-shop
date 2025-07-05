import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiLogin, CiShoppingBasket, CiLogout, CiUser, CiEdit } from 'react-icons/ci';
import { Icon } from '../../../icon/icon';
import { selectUserLogin, selectUserRole, selectUserId } from '../../../../selectors';
import { ROLE } from '../../../../bff/constants';
import { sessions } from '../../../../bff/sessions';
import { useLayoutEffect, useState } from 'react';
import { fetchSessions } from '../../../../bff/operations/fetch-sessions';
import styled from 'styled-components';
import { logout } from '../../../../actions';

const SpecialPanelContainer = ({ className }) => {
	const [allSessions, setAllSessions] = useState([]);
	const userId = useSelector(selectUserId);

	useLayoutEffect(() => {
		fetchSessions().then(({ res }) => setAllSessions(res));
	}, []);

	const role = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const dispatch = useDispatch();

	const currentSession = allSessions.find((data) => data.user.id === userId);

	const onLogout = async (currentSessionId) => {
		await sessions.remove(currentSessionId);
		sessionStorage.removeItem('userData');

		dispatch(logout());
	};

	return (
		<div className={className}>
			<div className="user-block">{role !== ROLE.GUEST ? <div className="user-login">{login}</div> : null}</div>
			<div className="icon-block">
				{role !== ROLE.GUEST ? (
					<>
						{role === ROLE.ADMIN ? (
							<Link to="/users/editing">
								<Icon>
									<CiEdit />
								</Icon>
							</Link>
						) : role === ROLE.MODERATOR ? (
							<Link to="products/editing">
								<Icon>
									<CiEdit />
								</Icon>
							</Link>
						) : null}
						<Link to="/basket">
							<Icon>
								<CiShoppingBasket />
							</Icon>
						</Link>
						<Icon>
							<CiLogout onClick={() => onLogout(currentSession.id)} />
						</Icon>
					</>
				) : (
					<>
						<Link to="/registration">
							<Icon>
								<CiUser />
							</Icon>
						</Link>
						<Link to="/authorization">
							<Icon>
								<CiLogin />
							</Icon>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	width: 260px;

	.user-block {
		height: 47.5px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.user-login {
		margin: 15px 4px 0 0;
		font-size: 17px;
		color: #bbb9ae;
	}

	.icon-block {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		height: 38px;
	}
`;
