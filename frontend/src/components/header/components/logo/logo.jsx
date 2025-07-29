import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="logo">
				<img src="/logo.png" alt="logo" />
				<h2 className="large-text">HOME</h2>
			</div>
			<h3 className="small-text">Магазин товаров для дома</h3>
		</div>
	);
};

const Image = styled(ImageContainer)`
	.logo {
		display: flex;
		height: 70px;
		padding: 0;
	}

	img {
		height: 70px;
		margin: -4px 0;
		padding: 0;
	}

	.large-text {
		color: #917070;
		margin: 30px 0 0 10px;
		height: 30px;
		font-weight: 100;
	}

	h3 {
		margin: 0;
		color: #917070;
		font-weight: 200;
	}
`;

const LogoContainer = ({ className }) => {
	return (
		<Link className={className} to="/">
			<Image />
		</Link>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	top: 0;
`;
