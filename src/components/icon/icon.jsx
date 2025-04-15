import styled from 'styled-components';

const IconContainer = ({ className, id, children, ...props }) => {
	return (
		<div className={className} {...props}>
			<i className={`fa ${id}`} aria-hidden="true"></i>
			{children ? <div>{children}</div> : null}
		</div>
	);
};

export const Icon = styled(IconContainer)`
	margin: ${({ margin = '50px 10px' }) => margin};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	font-weight: 100;
	font-size: 15px;
	color: ${({ disabled }) => (disabled ? '#ccc' : ' #5c5740')};
	text-align: center;

	&:hover {
		color: ${({ disabled }) => (disabled ? '#ccc' : ' #917070')};
	}

	& i {
		font-size: ${({ fontSize = '20px' }) => fontSize};
	}
`;
