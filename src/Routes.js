import React from 'react';
import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';
import Pagina404 from './pages/Pagina404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/cadastro/video" component={CadastroVideo} exact/>
				<Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
				<Route component={Pagina404}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;