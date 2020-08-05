import React from "react";
import PaginaDefault from "../PaginaDefault";
import {Link} from "react-router-dom";


function CadastroVideo() {
	return (
		<PaginaDefault>
			<h1>Pagina de cadastro de video</h1>
			<Link to="/cadastro/categoria">
				Cadastrar categoria
			</Link>
		</PaginaDefault>
	);
}

export default CadastroVideo;