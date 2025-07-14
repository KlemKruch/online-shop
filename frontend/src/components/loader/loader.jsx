import styled from 'styled-components';

const LoaderContainer = ({ className }) => {
	return <div className={className}></div>;
};

export const Loader = styled(LoaderContainer)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    border: 5px solid rgb(181, 107, 92);
    border-radius: 50%;
    border-left-color: transparent;
    animation: loader 1s infinite;

	@keyframes {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
`;
