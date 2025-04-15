import { Input } from '../../../input/input';
import { Icon } from '../../../icon/icon';
import styled from 'styled-components';

const SearchContainer = ({ className }) => {
	return (
		<div className={className}>
			<Input height="34px" width="100%" radius="20px" border="1px solid white" />
			<button>
				<Icon id="fa-search" margin="0" />
			</button>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	width: 500px;
	height: 35px;
	margin: 25px 30px;
	border: 1px solid #d9d9d9;
	border-radius: 20px;

	& button {
		width: 40px;
		height: 100%;
		border-radius: 20px;
		background-color: white;
		border: 1px solid white;
	}
`;
