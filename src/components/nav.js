import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/store';
import { debounce } from '../utilities/helpers';
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
	transition: all 0.3s ease-in-out;
	z-index: 3;
`;

const Nav = ({ scrollTo, open }) => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const [state, dispatch] = useContext(Context);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;
		setPrevScrollPos(currentScrollPos);
		if (state.menuShow && prevScrollPos < currentScrollPos) {
			dispatch({
				type: 'TOGGLE_MENU_SHOW',
				payload: !state.menuShow,
			});
		}
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

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
