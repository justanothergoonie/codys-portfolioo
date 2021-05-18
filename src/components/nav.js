import React, { useState } from 'react';
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

const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="menu">
			<div className="menu__tab--open" onClick={() => setOpen(!open)}>
				<div className="menu__tab-line"></div>
				<div className="menu__tab-line"></div>
				<div className="menu__tab-line"></div>
			</div>
			<Menu open={open}>
				<div
					className="menu__tab--close"
					onClick={() => setOpen(!open)}
				>
					<div className="menu__tab-line"></div>
					<div className="menu__tab-line"></div>
					<div className="menu__tab-line"></div>
				</div>
				<div className="menu__nav">
					<span className="nav__header">Never Say Die</span>
					<nav>
						<ul>
							<a href="#work">
								<li>Work</li>
							</a>
							<a href="#about">
								<li>About</li>
							</a>
							<a href="#skills">
								<li>Skills</li>
							</a>
							<a href="#contact">
								<li>Contact</li>
							</a>
						</ul>
					</nav>
				</div>
			</Menu>
		</div>
	);
};
export default Nav;
