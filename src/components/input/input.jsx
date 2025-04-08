import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => {
	return <input className={className} {...props} />;
};

export const Input = styled(InputContainer)`
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	font-size: ${({ fontSize }) => fontSize};
	margin: ${({ margin }) => margin};
	border-radius: ${({ radius = '20px' }) => radius};
	border: 1px solid white;
	padding: 5px 15px;
	outline: none;
	color: #5c5740;
`;
