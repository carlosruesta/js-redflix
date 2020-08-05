import React from "react";
import PaginaDefault from "../PaginaDefault";
import {Link} from "react-router-dom";


function CadastroVideo() {
	return (
		<PaginaDefault>
			<h1>Cadastro de categoria</h1>
			<Link to="/">
				Voltar ao home
			</Link>
		</PaginaDefault>
	);
}

export default CadastroVideo;