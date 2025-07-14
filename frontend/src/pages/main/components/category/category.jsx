import styled from 'styled-components';

const CategoryContainer = ({ name, className, ...props }) => {
	return (
		<div className={className} {...props}>
			{name}
		</div>
	);
};

export const Category = styled(CategoryContainer)`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	padding: 10px 15px;
	border-top: 1px solid #d9d9d9;
	font-size: 14px;
	cursor: pointer;

	&:hover {
		border: 1px solid #d9d9d9;
		background-color: #d9d9d9;
	}
`;
