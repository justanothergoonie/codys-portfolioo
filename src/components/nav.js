import React, { useContext } from 'react';
import { Context } from '../store/store';
import styled from 'styled-components';

const Menu = styled.div`
	background-color: #171616;
	display: flex;
	flex-direction: column;
	z-index: 2;
	height: 100vh;
	width: 150px;
	position: fixed;
	left: 0;
	top: 0;
	margin-left: ${(props) => (props.open ? '0' : '-100%')};
	transition: all 0.3s ease;
	z-index: 3;
`;

const Nav = ({ scrollTo, open }) => {
	const [state, dispatch] = useContext(Context);
	console.log(state.menuShow);
	return (
		<div className="menu">
			<div
				className="menu__tab--open"
				onClick={() =>
					dispatch({
						type: 'TOGGLE_MENU_SHOW',
						payload: !state.menuShow,
					})
				}
			>
				<div className="menu__tab-line"></div>
				<div className="menu__tab-line"></div>
				<div className="menu__tab-line"></div>
			</div>
			<Menu open={state.menuShow}>
				<div
					className="menu__tab--close"
					onClick={() =>
						dispatch({
							type: 'TOGGLE_MENU_SHOW',
							payload: !state.menuShow,
						})
					}
				>
					<div className="menu__tab-line"></div>
					<div className="menu__tab-line"></div>
					<div className="menu__tab-line"></div>
				</div>
				<div className="menu__nav">
					<span className="nav__header">Never Say Die</span>
					<nav>
						<ul>
							<li onClick={() => scrollTo('work')}>Work</li>

							<li onClick={() => scrollTo('about')}>About</li>

							<li onClick={() => scrollTo('skills')}>Skills</li>

							<li onClick={() => scrollTo('contact')}>Contact</li>
						</ul>
					</nav>
				</div>
			</Menu>
		</div>
	);
};
export default Nav;
