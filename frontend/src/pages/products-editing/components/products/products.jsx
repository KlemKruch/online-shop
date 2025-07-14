import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiFloppyDisk, CiTrash } from 'react-icons/ci';
import { editProduct } from '../../../../actions';
import styled from 'styled-components';

const ProductsContainer = ({ className, id, name, amount, price, image, category, categories, description, deleteProduct }) => {
	const dispatch = useDispatch();

	const [selectName, setSelectName] = useState(name);
	const [selectAmount, setSelectAmount] = useState(amount);
	const [selectPrice, setSelectPrice] = useState(price);
	const [selectImage, setSelectImage] = useState(image);
	const [selectCategoryId, setSelectCategoryId] = useState(category);
	const [selectDescription, setSelectDescription] = useState(description);

	const onChange = (value, functionToChangeState) => {
		functionToChangeState(value);
	};

	const onSaveProduct = () => {
		dispatch(
			editProduct(id, {
				name: selectName,
				amount: selectAmount,
				price: selectPrice,
				image: selectImage,
				category: selectCategoryId,
				description: selectDescription,
			}),
		);
	};

	return (
		<div className={className}>
			<div className="product-block">
				<div className="headers">
					<div className="text">Название:</div>
					<div className="text">Категория:</div>
					<div className="text">Цена:</div>
					<div className="text">Количество:</div>
					<div className="text">Фото:</div>
				</div>
				<div className="inputs">
					<input
						value={selectName}
						name="name"
						onChange={({ target }) => onChange(String(target.value), setSelectName)}
					/>
					<select
						value={selectCategoryId}
						name="category"
						onChange={({ target }) => onChange(String(target.value), setSelectCategoryId)}
					>
						{categories.map(({ id: categoriesId, name: categoriesName }) => (
							<option value={categoriesId} key={categoriesId}>
								{categoriesName}
							</option>
						))}
					</select>
					<input
						value={selectPrice}
						name="price"
						onChange={({ target }) => onChange(String(target.value), setSelectPrice)}
					/>
					<input
						value={selectAmount}
						name="amount"
						onChange={({ target }) => onChange(Number(target.value), setSelectAmount)}
					/>
					<input
						value={selectImage}
						name="image"
						onChange={({ target }) => onChange(String(target.value), setSelectImage)}
					/>
				</div>
				<div>
					<textarea
						value={selectDescription}
						name="description"
						onChange={({ target }) => onChange(String(target.value), setSelectDescription)}
					></textarea>
				</div>
				<div className="buttons">
					<CiFloppyDisk className="icon" onClick={() => onSaveProduct()} />
					<CiTrash className="icon" onClick={() => deleteProduct(id)} />
				</div>
			</div>
		</div>
	);
};

export const Products = styled(ProductsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 15px;
	width: 100%;

	.product-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 15px 15px;
		border: 1px solid #d9d9d9;
		border-radius: 7px;
	}

	.headers {
		padding: 8px 0 0 0;
	}

	.text {
		margin-bottom: 10px;
		margin-right: 9px;
		height: 35px;
		padding: 5px;
		font-size: 13px;
	}

	.inputs {
		display: flex;
		flex-direction: column;
	}

	textarea {
		width: 550px;
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
		width: 220px;
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
		width: 220px;
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
