import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import { Input, Icon } from '../../../../components';
import { setSearchInput, START_SEARCH, STOP_SEARCH } from '../../../../actions';
import styled from 'styled-components';

const SearchContainer = ({ className }) => {
	const dispatch = useDispatch();

	const [value, setValue] = useState('');

	const onChange = ({ target }) => {
		dispatch(setSearchInput(target.value));
		setValue(target.value);
		dispatch(STOP_SEARCH());
	};

	const startSearch = () => {
		dispatch(START_SEARCH());
		setValue('');
	};

	return (
		<div className={className}>
			<Input
				height="34px"
				width="100%"
				radius="20px"
				border="1px solid white"
				onChange={onChange}
				value={value}
				placeholder="Введите название товара..."
			/>
			<button onClick={() => startSearch()}>
				<Icon margin="0">
					<CiSearch />
				</Icon>
			</button>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	width: 500px;
	height: 35px;
	border: 1px solid white;
	border-radius: 20px;
	background-color: white;

	& button {
		width: 40px;
		height: 100%;
		border-radius: 20px;
		background-color: white;
		border: 1px solid white;
	}
`;
