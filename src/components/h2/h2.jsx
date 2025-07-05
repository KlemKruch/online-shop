import styled from 'styled-components';

const H2Container = ({ className, children }) => {
	return <h2 className={className}>{children}</h2>;
};

export const H2 = styled(H2Container)`
	margin: ${({ margin }) => margin};
	font-size: ${({ fontsize = '23px' }) => fontsize};
	color: ${({ color = '#825a5a' }) => color};
	font-weight: 100;
	text-decoration: underline;
`;
