import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../bff/constants';
import { MainBlock, AccessDenied } from '../../components';
import styled from 'styled-components';

const FavoritesContainer = (className) => {
	const userRole = useSelector(selectUserRole);

	const isGuest = userRole === ROLE.GUEST;

	return (
		<MainBlock>
			{isGuest ? (
				<AccessDenied children="Доступ только для авторизованных пользователей." />
			) : (
				<div className={className}></div>
			)}
		</MainBlock>
	);
};

export const Favorites = styled(FavoritesContainer)``;
