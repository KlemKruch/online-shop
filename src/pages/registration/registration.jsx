import { Input, H2, Button } from '../../components';
import styled from 'styled-components';

const RegistrationContainer = ({ className }) => {
	return (
		<main className={className}>
			<H2 children="Регистрация" margin="80px 0 0 0" />
			<form>
				<Input
					height="40px"
					width="400px"
					fontSize="17px"
					radius="10px"
					margin="20px 0 20px 0"
					placeholder="Введите почту..."
				/>
				<Input
					height="40px"
					width="400px"
					fontSize="17px"
					radius="10px"
					margin="0 0 20px 0"
					placeholder="Придумайте пароль..."
				/>
				<Input
					height="40px"
					width="400px"
					fontSize="17px"
					radius="10px"
					margin="0 0 20px 0"
					placeholder="Повторите пароль..."
				/>
				<Button>Регистрация</Button>
			</form>
		</main>
	);
};

export const Registration = styled(RegistrationContainer)`
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
