import React from "react";
import Logo from "../../assets/img/logo-redflix.png"
import Button from "../Button";
import { LogoImage, MenuWrapper } from "./style.js";

function Menu() {
	return (
		<MenuWrapper className="Menu">
			<a href="/">
				<LogoImage className="Logo" src={Logo} alt="Redflix logo"/>
			</a>
			<Button as="a" href="/" className="ButtonLink">
				Novo vídeo
			</Button>
		</MenuWrapper>
	);
}

export default Menu;