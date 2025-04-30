import styled from 'styled-components';

const titleNames = [
	{
		name: 'Название',
		id: 1,
	},
	{
		name: 'Категория',
		id: 2,
	},
	{
		name: 'Стоимость ₽',
		id: 3,
	},
	{
		name: 'Кол-во шт',
		id: 4,
	},
	{
		name: 'Фото',
		id: 5,
	},
];

const HeadersContainer = ({ className }) => {
	return (
		<div className={className}>
			{titleNames.map(({ name, id }) => (
				<div className="header" key={id}>
					{name}
				</div>
			))}
			<div className="actions">Действия</div>
		</div>
	);
};

export const Headers = styled(HeadersContainer)`
	display: flex;
	justify-content: space-between;
	border: 1px solid #d9d9d9;
	border-radius: 7px;
	height: 45px;
	color: #5c5740;

	.header {
		width: 100%;
		border-right: 1px solid #d9d9d9;
		text-align: center;
		padding: 11px;
	}

	.actions {
		width: 100%;
		text-align: center;
		padding: 11px;
	}
`;
