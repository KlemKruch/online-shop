import { useState } from 'react';
import { CiTrash, CiFloppyDisk } from 'react-icons/ci';
import { updateUserRole } from '../../../../bff/operations/update-user-role';
import styled from 'styled-components';

const UserRowContainer = ({ className, id, login, roleId: userRoleId, deleteUser, roles }) => {
	const [selectedRole, setSelectedRole] = useState(userRoleId);
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRole(target.value);
	};

	const onRoleSave = (userId, newUserRoleId) => {
		updateUserRole(userId, newUserRoleId).then(() => setInitialRoleId(newUserRoleId));
	};

	const isSaveDisabled = userRoleId === initialRoleId;

	return (
		<div className={className}>
			<div className="row">{login}</div>
			<select className="row" value={selectedRole} onChange={onRoleChange}>
				{roles.map(({ id: idRole, name: roleName }) => (
					<option value={idRole} key={idRole}>
						{roleName}
					</option>
				))}
			</select>
			<div className="buttons-block">
				<CiFloppyDisk className="button" disabled={isSaveDisabled} onClick={() => onRoleSave(id, selectedRole)} />
				<CiTrash className="button" onClick={() => deleteUser(id)} />
			</div>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	width: 100%;
	border-bottom: 1px solid #d9d9d9;
	padding: 10px;

	.row {
		width: 186px;
		text-align: center;
	}

	.buttons-block {
		margin-left: 12px;
		width: 186px;
		text-align: center;
	}

	.button {
		font-size: 23px;
		margin-right: 15px;
		color: ${({ disabled }) => (disabled ? 'red' : '#5c5740')};

		&:hover {
			cursor: pointer;
			color: #917070;
		}
	}

	select {
		border-radius: 7px;
		border: 1px solid #d9d9d9;
		color: #5c5740;
	}
`;
