import { Link } from 'react-router-dom';
import { Button } from '../button/button';
import styled from 'styled-components';

const AccessDeniedContainer = ({ className, children }) => {
	return (
		<div className={className}>
			<div className="large-text">СТРАНИЦА НЕДОСТУПНА</div>
			<div className="small-text">{children}</div>
			<div className="small-text">Вот полезная ссылка:</div>
			<div className="buttons">
				<Link to="/">
					<Button children="На главную" />
				</Link>
			</div>
		</div>
	);
};

export const AccessDenied = styled(AccessDeniedContainer)`
	width: 100%;
	height: 535px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.large-text {
		font-size: 50px;
		margin: 40px;
	}

	.small-text {
		font-size: 25px;
		margin: 20px;
	}

	.buttons {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 30px;
	}
`;
