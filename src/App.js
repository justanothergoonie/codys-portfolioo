import './styles/main.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Store } from './store/store';
 
import Project from './views/Project';
import Home from './views/Home';
const App = () => (
	<Store>
		<Router>
			<Switch>
				<Route path="/projects/:id">
					<Project />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	</Store>
);
export default App;
