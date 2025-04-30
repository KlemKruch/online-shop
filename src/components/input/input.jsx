import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => {
	return <input className={className} {...props} />;
};

export const Input = styled(InputContainer)`
	height: ${({ height = '40px' }) => height};
	width: ${({ width = '400px' }) => width};
	font-size: ${({ fontSize = '17px' }) => fontSize};
	margin: ${({ margin }) => margin};
	border-radius: ${({ radius = '10px' }) => radius};
	type: ${({ type }) => type};
	border: ${({ border = '1px solid white' }) => border};
	padding: 5px 15px;
	outline: none;
	color: #5c5740;
`;
