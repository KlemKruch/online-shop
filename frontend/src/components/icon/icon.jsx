import styled from 'styled-components';

const IconContainer = ({ className, children, ...props }) => {
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

export const Icon = styled(IconContainer)`
	display: flex;
	margin: ${({ margin = '0 0 0 10px' }) => margin};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	font-size: ${({ size = '30px' }) => size};
	color: ${({ disabled }) => (disabled ? '#ccc' : ' #5c5740')};
	text-align: center;

	&:hover {
		color: ${({ disabled }) => (disabled ? '#ccc' : ' #917070')};
	}
`;
