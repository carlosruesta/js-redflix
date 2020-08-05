import React from 'react';
import styled from "styled-components";
import Menu from '../../components/Menu'
import Footer from '../../components/Footer';

const Conteudo = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;    
    padding-top: var(--alturaMenu);
    padding-left: 5%;
    padding-right: 5%;
`;

function PaginaDefault({ children }) {
	return (
		<>
			<Menu/>
			<Conteudo>
				{ children }
			</Conteudo>
			<Footer/>
		</>
	);
}

export default PaginaDefault;
