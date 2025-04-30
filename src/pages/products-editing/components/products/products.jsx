import { useState } from 'react';
import { CiFloppyDisk, CiTrash } from 'react-icons/ci';
import styled from 'styled-components';
import { deleteProduct } from '../../../../bff/api';

const ProductsContainer = ({ className, id, name, amount, price, image, category, categories }) => {
	const [selectName, setSelectName] = useState(name);
	const [selectAmount, setSelectAmount] = useState(amount);
	const [selectPrice, setSelectPrice] = useState(price);
	const [selectImage, setSelectImage] = useState(image);
	const [selectedCategoryId, setSelectedCategoryId] = useState(category);

	const onChange = (value, functionToChangeState) => {
		functionToChangeState(value);
	};

	const onSave = (productId, selectName, selectAmount, selectPrice, selectImage, selectedCategoryId) => {
		//сделать изменение товара
	};

	const onRemove = (productId) => {
		deleteProduct(productId);
		//не срабатываает удаление
	};

	return (
		<div className={className}>
			<form>
				<input value={selectName} onChange={({ target }) => onChange(String(target.value), setSelectName)} />
				<select
					value={selectedCategoryId}
					onChange={({ target }) => onChange(String(target.value), setSelectedCategoryId)}
				>
					{categories.map(({ id: categoriesId, name: categoriesName }) => (
						<option value={categoriesId} key={categoriesId}>
							{categoriesName}
						</option>
					))}
				</select>
				<input value={selectPrice} onChange={({ target }) => onChange(String(target.value), setSelectPrice)} />
				<input value={selectAmount} onChange={({ target }) => onChange(Number(target.value), setSelectAmount)} />
				<input value={selectImage} onChange={({ target }) => onChange(String(target.value), setSelectImage)} />
				<div className="buttons">
					<CiFloppyDisk className="icon" onClick={() => onSave(id)} />
					<CiTrash className="icon" onClick={() => onRemove(id)} />
				</div>
			</form>
		</div>
	);
};

export const Products = styled(ProductsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 15px;
	width: 100%;

	form {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0 0 0 6px;
	}

	input {
		margin-bottom: 10px;
		margin-right: 9px;
		width: 113px;
		height: 35px;
		padding: 5px;
		text-align: center;
		font-size: 13px;
		border-radius: 7px;
		border: 1px solid #d9d9d9;
		color: #5c5740;
	}

	select {
		margin-bottom: 10px;
		margin-right: 9px;
		width: 121px;
		padding: 5px;
		text-align: center;
		font-size: 13px;
		border-radius: 7px;
		border: 1px solid #d9d9d9;
		color: #5c5740;
	}

	.buttons {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 10px;
		margin-right: 9px;
		width: 113px;
		height: 35px;
		padding: 6px;
		text-align: center;
		font-size: 13px;
		border-radius: 7px;
		border: 1px solid #d9d9d9;
	}

	.icon {
		font-size: 23px;

		&:hover {
			cursor: pointer;
			color: #917070;
		}
	}
`;
