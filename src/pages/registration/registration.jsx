import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate } from 'react-router-dom';
import { server } from '../../bff';
import { Input, H2, Button } from '../../components';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../bff/constants';
import { setUser } from '../../actions';
import styled from 'styled-components';

const regFormScheme = yup.object().shape({
	login: yup
		.string()
		.required('Заполните поле логин')
		.matches(/^[\w@_.]+$/, 'Неверно заполнен логин. Допускаются буквы, цифры и знаки: @ _.')
		.min(3, 'Неверно заполнен логин. Должно быть не менее 3 символов.')
		.max(25, 'Неверно заполнен логин. Должно быть не более 25 символов.'),
	password: yup
		.string()
		.required('Заполните поле пароль')
		.matches(/^[\w@_#%$]+$/, 'Неверно заполнен пароль. Допускаются буквы, цифры и знаки: @ _ # % $.')
		.min(5, 'Неверно заполнен пароль. Должно быть не менее 5 символов.')
		.max(30, 'Неверно заполнен пароль. Должно быть не более 30 символов.'),
	passcheck: yup
		.string()
		.required('Заполните поле повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegistrationContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormScheme),
	});

	const [serverError, setServerError] = useState(null);
	const role = useSelector(selectUserRole);
	const dispatch = useDispatch();

	const onSubmit = ({ login, password }) => {
		server.registration(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка сервера. ${error}`);
			}

			dispatch(setUser(res));
			sessionStorage.setItem('userData', JSON.stringify(res));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;

	const errorMessage = formError || serverError;

	if (role !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<main className={className}>
			<H2 children="Регистрация" margin="80px 0 0 0" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="login"
					margin="20px 0 20px 0"
					placeholder="Введите почту..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					margin="0 0 20px 0"
					placeholder="Придумайте пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					margin="0 0 20px 0"
					placeholder="Повторите пароль..."
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Регистрация
				</Button>
			</form>
			{errorMessage && <div>{errorMessage}</div>}
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
