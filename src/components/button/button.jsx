import styled from 'styled-components';

const ButtonContainer = ({ className, children, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	margin: ${({ margin }) => margin};
	background-color: ${({ backgroundcolor = '#c6b4b4' }) => backgroundcolor};
	border: none;
	width: 200px;
	height: 40px;
	border-radius: 30px;
	color: #f9f8f3;
	font-weight: 100;
	cursor: pointer;
	font-size: 17px;

	&:hover {
		background-color: #f9f8f3;
		color: #825a5a;
		border: 0;
		-webkit-box-shadow: -1px 0px 16px 12px rgba(130, 90, 90, 0.23);
		-moz-box-shadow: -1px 0px 16px 12px rgba(130, 90, 90, 0.23);
		box-shadow: -1px 0px 16px 12px rgba(130, 90, 90, 0.23);
	}
`;
