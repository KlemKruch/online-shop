import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, H2, AccessDenied, MainBlock } from '../../components';
import { addNewProduct } from '../../actions';
import { categories } from '../../constants/categories';
import { selectUserRole } from '../../selectors';
import { ROLES } from '../../constants/roles';
import styled from 'styled-components';

const AddProductContainer = ({ className }) => {
	const userRole = useSelector(selectUserRole);

	const [productName, setProductName] = useState('');
	const [productAmount, setProductAmount] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productImage, setProductImage] = useState('');
	const [productCategoryId, setProductCategoryId] = useState('');
	const [productDescription, setProductDescription] = useState('');

	const dispatch = useDispatch();

	const onChange = (value, functionToChangeState) => {
		functionToChangeState(value);
	};

	const onSave = () => {
		dispatch(
			addNewProduct({
				name: productName,
				amount: productAmount,
				price: productPrice,
				image: productImage,
				category: productCategoryId,
				description: productDescription,
			}),
		);
		setProductName('');
		setProductAmount('');
		setProductPrice('');
		setProductImage('');
		setProductCategoryId('');
		setProductDescription('');
	};

	return userRole !== ROLES.MODERATOR ? (
		<MainBlock>
			<AccessDenied children="Доступ только для модератора." />
		</MainBlock>
	) : (
		<div className={className}>
			<div className="header">
				<H2>Добавить товар</H2>
			</div>
			<div className="form-to-add">
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
				<div className="button">
					<Button type="submit" onClick={() => onSave()}>
						Добавить
					</Button>
				</div>
			</div>
		</div>
	);
};

export const AddProduct = styled(AddProductContainer)`
	.form-to-add {
		display: flex;
		flex-direction: column;
	}

	.button {
		display: flex;
		justify-content: center;
	}

	.header {
		display: flex;
		justify-content: center;
	}

	.field {
		width: 100%;
		height: 40px;
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
