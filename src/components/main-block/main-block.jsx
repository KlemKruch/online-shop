import styled from 'styled-components';

const MainBlockContainer = ({ className, children }) => {
	return <main className={className}>{children}</main>;
};

export const MainBlock = styled(MainBlockContainer)`
	margin: ${({ margin = '20px 0' }) => margin};
	justify-content: space-between;
	display: flex;
	background-color: white;
	width: 100%;
	height: 550px;
	border-radius: 7px;
	color: rgb(58, 55, 39);
`;
