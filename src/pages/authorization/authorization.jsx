import { Input, H2, Button } from '../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthorizationContainer = ({ className }) => {
	return (
		<main className={className}>
			<H2 children="Авторизация" margin="80px 0 0 0" />
			<form>
				<Input
					height="40px"
					width="400px"
					fontSize="17px"
					radius="10px"
					margin="20px 0 20px 0"
					placeholder="Введите логин..."
				/>
				<Input
					height="40px"
					width="400px"
					fontSize="17px"
					radius="10px"
					margin="0 0 20px 0"
					placeholder="Введите пароль..."
				/>
				<Button>Войти</Button>
				<Link to="/registration" className="registration">
					Зарегистрироваться
				</Link>
			</form>
		</main>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	& .registration {
		margin: 20px 0;
		color: #5c5740;

		&:hover {
			color: #825a5a;
			text-decoration: underline;
		}
	}
`;
