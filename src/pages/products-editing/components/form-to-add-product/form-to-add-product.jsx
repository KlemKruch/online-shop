import { useState } from 'react';
import { Button } from '../../../../components';
import { addNewProduct } from '../../../../bff/operations';
import styled from 'styled-components';

const FormToAddProductContainer = ({ className, categories }) => {
	const [productName, setProductName] = useState('');
	const [productAmount, setProductAmount] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productImage, setProductImage] = useState('');
	const [productCategoryId, setProductCategoryId] = useState('');
	const [productDescription, setProductDescription] = useState('');

	const onChange = (value, functionToChangeState) => {
		functionToChangeState(value);
	};

	const onSubmit = () => {
		addNewProduct(
			String(productName),
			Number(productAmount),
			Number(productPrice),
			String(productImage),
			String(productCategoryId),
			String(productDescription),
		);
	};

	return (
		<form className={className} onSubmit={onSubmit}>
			<input
				value={productName}
				type="text"
				name="name"
				placeholder="Введите название..."
				required
				className="field"
				onChange={({ target }) => onChange(target.value, setProductName)}
			/>
			<input
				value={productPrice}
				type="number"
				name="price"
				placeholder="Введите стоимость..."
				required
				className="field"
				onChange={({ target }) => onChange(target.value, setProductPrice)}
			/>
			<input
				value={productAmount}
				type="number"
				name="amount"
				placeholder="Введите количество..."
				required
				className="field"
				onChange={({ target }) => onChange(target.value, setProductAmount)}
			/>
			<input
				value={productImage}
				type="text"
				name="image"
				placeholder="Введите адрес фото..."
				required
				className="field"
				onChange={({ target }) => onChange(target.value, setProductImage)}
			/>
			<textarea
				value={productDescription}
				type="text"
				name="description"
				placeholder="Введите описание..."
				required
				onChange={({ target }) => onChange(target.value, setProductDescription)}
			></textarea>
			<select
				className="field"
				name="category"
				value={productCategoryId}
				onChange={({ target }) => onChange(target.value, setProductCategoryId)}
			>
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

	textarea {
		width: 100%;
		height: 130px;
		margin-bottom: 10px;
		border-radius: 7px;
		border: 1px solid #d9d9d9;
		padding: 5px;
		color: #5c5740;
		resize: none;
	}
`;
