import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../actions';
import { AccessDenied, H2, Loader, MainBlock } from '../../components';
import { TableRow, UserRow } from './components';
import { selectIsLoading, selectUserRole } from '../../selectors';
import { request } from '../../utils/request';
import { ROLES } from '../../constants/roles';
import styled from 'styled-components';

const UsersEditingContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);

	const userRole = useSelector(selectUserRole);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

	const isAdmin = userRole === ROLES.ADMIN ? true : false;

	useEffect(() => {
		dispatch(setIsLoading(true));

		if (isAdmin) {
			Promise.all([request('/api/users'), request('/api/users/roles')]).then(([usersRes, rolesRes]) => {
				setUsers(usersRes.data);
				setRoles(rolesRes.data);

				return dispatch(setIsLoading(false));
			});
		} else {
			dispatch(setIsLoading(false));
		}
	}, [dispatch, shouldUpdateUserList, isAdmin]);

	const deleteUser = (userId) => {
		request(`/api/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<MainBlock>
			{isLoading ? (
				<Loader />
			) : isAdmin ? (
				<div className={className}>
					<H2>Пользователи</H2>
					<div className="users-block">
						<TableRow />
						{users.map(({ id, login, roleId }) => (
							<UserRow
								key={id}
								id={id}
								login={login}
								roleId={roleId}
								deleteUser={deleteUser}
								roles={roles.filter(({ id }) => id !== 3)}
							/>
						))}
					</div>
				</div>
			) : (
				<AccessDenied children="Доступ только для администратора." />
			)}
		</MainBlock>
	);
};

export const UsersEditing = styled(UsersEditingContainer)`
	width: 100%;
	padding: 15px 20px;
	display: flex;
	justify-content: center;
	flex-direction: column;

	h2 {
		text-align: center;
	}

	.users-block {
		width: 600px;
		min-height: 200px;
		margin: 20px auto;
		border-radius: 7px;
		border: 1px solid #d9d9d9;
	}
`;
