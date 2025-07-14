import styled from 'styled-components';

const TableRowContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>Логин</div>
			<div>Роль</div>
			<div>Действия</div>
		</div>
	);
};

export const TableRow = styled(TableRowContainer)`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 10px 15px;
	border-bottom: 1px solid #d9d9d9;
`;
