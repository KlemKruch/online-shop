import styled from 'styled-components';
import { Button } from '../../../../components';
const titlePlaceholders = [
	{
		name: 'Введите название...',
		id: 1,
	},
	{
		name: 'Введите стоимость...',
		id: 2,
	},
	{
		name: 'Введите количество...',
		id: 3,
	},
	{
		name: 'Введите адрес фото...',
		id: 4,
	},
];

const FormToAddProductContainer = ({ className, categories }) => {
	return (
		<form className={className}>
			{titlePlaceholders.map(({ name, id }) => (
				<input type="text" key={id} placeholder={name} className="field" />
			))}
			<select className="field">
				<option>{'Выберите категорию...'}</option>
				{categories.map(({ id: categoriesId, name: categoriesName }) => (
					<option value={categoriesId} key={categoriesId}>
						{categoriesName}
					</option>
				))}
			</select>
			<Button type="submit">Добавить</Button>
		</form>
	);
};

export const FormToAddProduct = styled(FormToAddProductContainer)`
	display: flex;
	flex-direction: column;

	.field {
		width: 100%;
		height: 30px;
		margin-bottom: 10px;
		border-radius: 7px;
		border: 1px solid #d9d9d9;
		padding: 5px;
		color: #5c5740;
	}

	button {
		margin-top: 15px;
	}
`;
