import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo-redflix.png"
import Button from "../Button";
import { LogoImage, MenuWrapper } from "./style.js";

function Menu() {
	return (
		<MenuWrapper className="Menu">
			<Link to="/">
				<LogoImage className="Logo" src={Logo} alt="Redflix logo"/>
			</Link>
			<Button as={Link} to="/cadastro/video" className="ButtonLink">
				Novo vídeo
			</Button>
		</MenuWrapper>
	);
}

export default Menu;