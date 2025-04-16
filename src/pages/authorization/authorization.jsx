import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import { useEffect, useState } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { Input, H2, Button } from '../../components';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../bff/constants';
import styled from 'styled-components';

const authFormScheme = yup.object().shape({
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
});

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormScheme),
	});

	const [serverError, setServerError] = useState('');
	const role = useSelector(selectUserRole);

	const dispatch = useDispatch();
	const store = useStore();

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		return store.subscribe(() => {
			let previousWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});
	}, [store, reset]);

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка сервера. ${error}`);
				return;
			}

			dispatch(setUser(res));

			sessionStorage.setItem('userData', JSON.stringify(res));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;

	const errorMessage = formError || serverError;

	if (role !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<main className={className}>
			<H2 children="Авторизация" margin="80px 0 0 0" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="login"
					radius="10px"
					margin="20px 0 20px 0"
					placeholder="Введите логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					radius="10px"
					margin="0 0 20px 0"
					placeholder="Введите пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Войти
				</Button>
				<Link to="/registration" className="registration">
					Зарегистрироваться
				</Link>
				{errorMessage && <div>{errorMessage}</div>}
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
