import styled from 'styled-components';

const ErrorMessageContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const ErrorMessage = styled(ErrorMessageContainer)`
	margin-top: 20px;
	color: #b32939;
`;
