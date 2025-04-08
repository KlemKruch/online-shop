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
	cursor: pointer;
	font-weight: 100;
	font-size: 15px;
	color: ${({ color = '#5c5740' }) => color};
	text-align: center;

	&:hover {
		color: #917070;
	}

	& i {
		font-size: ${({ fontSize = '20px' }) => fontSize};
	}
`;
