import './styles/main.scss';
import React, { useRef, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Nav from './components/nav';
import Project from './views/Project';
import Home from './views/Home';
import Container from './components/container';
import Background from './components/background';
import { Context } from './store/store';

const RouterArchitecture = () => {
	const [state, dispatch] = useContext(Context);

	const workRef = useRef();
	const aboutRef = useRef();
	const skillsRef = useRef();
	const contactRef = useRef();
	const scrollTo = (section) => {
		const scrollY = {
			work: workRef.current.offsetTop,
			about: aboutRef.current.offsetTop,
			skills: skillsRef.current.offsetTop,
			contact: contactRef.current.offsetTop,
		}[section];

		window.scrollTo({
			top: scrollY,
			left: 0,
			behavior: 'smooth',
		});
		dispatch({
			type: 'TOGGLE_MENU_SHOW',
			payload: !state.menuShow,
		});
	};

	const homeProps = {
		workRef,
		aboutRef,
		skillsRef,
		contactRef,
	};
	const routes = [
		{ path: '/', name: 'Home', Component: Home, props: homeProps },
		{ path: '/projects/:id', name: 'Project', Component: Project },
	];
	// console.log(routes);
	return (
		<>
			<Nav scrollTo={(s) => scrollTo(s)} />
			<Background />
			<Router>
				<Container>
					{routes.map(({ path, Component, props }) => {
						// console.log(path, Component);
						return (
							<Route key={path} exact path={path}>
								{({ match }) => (
									<CSSTransition
										in={match != null}
										timeout={300}
										classNames="page"
										unmountOnExit
									>
										<div className="page">
											<Component {...props} />
										</div>
									</CSSTransition>
								)}
							</Route>
						);
					})}
				</Container>
			</Router>
		</>
	);
};
export default RouterArchitecture;
