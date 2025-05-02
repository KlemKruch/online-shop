import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../icon/icon';
import { selectUserLogin, selectUserRole, selectSession } from '../../../../selectors';
import { ROLE } from '../../../../bff/constants';
import { logout } from '../../../../actions';
import { CiLogin, CiShoppingBasket, CiLogout, CiUser, CiEdit } from "react-icons/ci";
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

	console.log(role, ROLE.ADMIN);


	return (
		<div className={className}>
			<div className='user-block'>
			{role !== ROLE.GUEST ? (
				<div className='user-login'>
					{login}
				</div>
				) : null}
			</div>
				<div className='icon-block'>
				{role !== ROLE.GUEST ? (
					<>
						{role === ROLE.ADMIN ?
							<Link to="/users/editing">
								<CiEdit className='icon'/>
							</Link>
						: role === ROLE.MODERATOR ?
							<Link to="products/editing">
								<CiEdit className='icon'/>
							</Link>
						: null}
						<Link to="/basket">
							<CiShoppingBasket className='icon'/>
						</Link>
						<CiLogout onClick={onLogout} className='icon' />
					</>
					) :
					<>
						<Link to="/registration">
							<CiUser className='icon'/>
						</Link>
						<Link to="/authorization">
							<CiLogin className='icon'/>
						</Link>
					</>
				}
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
		font-size: 17px;
		color: #bbb9ae;
	}

	.icon-block {
		display: flex;
    	justify-content: flex-end;
		align-items: flex-end;
		height: 47.5px;
	}

	.icon {
		display: flex;
		font-size: 30px;
		margin-left: 10px;
		&:hover {
			cursor: pointer;
		}
	}
`;
