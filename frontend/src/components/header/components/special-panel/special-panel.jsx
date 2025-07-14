import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiLogin, CiShoppingBasket, CiLogout, CiUser, CiEdit, CiMedicalCross } from 'react-icons/ci';
import { Icon } from '../../../icon/icon';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { logout } from '../../../../actions';
import { ROLES } from '../../../../constants/roles';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className }) => {
	const role = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const dispatch = useDispatch();

	const onLogout = async () => {
		dispatch(logout());

		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<div className="user-block">{role !== ROLES.GUEST ? <div className="user-login">{login}</div> : null}</div>
			<div className="icon-block">
				{role !== 3 ? (
					<>
						{role === ROLES.ADMIN ? (
							<Link to="/users">
								<Icon>
									<CiEdit />
								</Icon>
							</Link>
						) : role === ROLES.MODERATOR ? (
							<>
								<Link to="products/add">
									<Icon>
										<CiMedicalCross />
									</Icon>
								</Link>
								<Link to="products/editing">
									<Icon>
										<CiEdit />
									</Icon>
								</Link>
							</>
						) : null}
						<Link to="/basket">
							<Icon>
								<CiShoppingBasket />
							</Icon>
						</Link>
						<Icon>
							<CiLogout onClick={() => onLogout()} />
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
