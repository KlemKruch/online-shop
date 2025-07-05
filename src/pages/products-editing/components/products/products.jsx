import { useState } from 'react';
import { CiFloppyDisk, CiTrash } from 'react-icons/ci';
import { updateProduct } from '../../../../bff/operations/update-product';
import styled from 'styled-components';

const ProductsContainer = ({ className, id, name, amount, price, image, category, categories, description, deleteProduct }) => {
	const [selectName, setSelectName] = useState(name);
	const [selectAmount, setSelectAmount] = useState(amount);
	const [selectPrice, setSelectPrice] = useState(price);
	const [selectImage, setSelectImage] = useState(image);
	const [selectCategoryId, setSelectCategoryId] = useState(category);
	const [selectDescription, setSelectDescription] = useState(description);

	const onChange = (value, functionToChangeState) => {
		functionToChangeState(value);
	};

	const onSaveProduct = (productId, newName, newAmount, newPrice, newImage, newCategory, newDescription) => {
		updateProduct(productId, newName, newAmount, newPrice, newImage, newCategory, newDescription);
	};

	return (
		<div className={className}>
			<form>
				<div className="inputs">
					<input value={selectName} onChange={({ target }) => onChange(String(target.value), setSelectName)} />
					<select
						value={selectCategoryId}
						onChange={({ target }) => onChange(String(target.value), setSelectCategoryId)}
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
				</div>
				<div>
					<textarea
						value={selectDescription}
						onChange={({ target }) => onChange(String(target.value), setSelectDescription)}
					></textarea>
				</div>
				<div className="buttons">
					<CiFloppyDisk
						className="icon"
						onClick={() =>
							onSaveProduct(
								id,
								selectName,
								selectAmount,
								selectPrice,
								selectImage,
								selectCategoryId,
								selectDescription,
							)
						}
					/>
					<CiTrash className="icon" onClick={() => deleteProduct(id)} />
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
		padding: 15px 15px;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
	}

	.inputs {
		display: flex;
		flex-direction: column;
	}

	textarea {
		width: 426px;
		height: 215px;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
		padding: 15px 15px;
		resize: none;
		color: #5c5740;
	}

	input {
		margin-bottom: 10px;
		margin-right: 9px;
		width: 170px;
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
		width: 170px;
		height: 35px;
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
		width: 75px;
		height: 35px;
		padding: 6px;
		text-align: center;
		font-size: 13px;
	}

	.icon {
		font-size: 23px;

		&:hover {
			cursor: pointer;
			color: #917070;
		}
	}
`;
