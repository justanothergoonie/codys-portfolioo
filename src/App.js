import './styles/main.scss';
import React from 'react';
import Router from './Router';
import { Store } from './store/store';

const App = () => (
	<Store>
		<Router></Router>
	</Store>
);
export default App;
