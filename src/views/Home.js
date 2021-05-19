import React, { useContext, useRef } from 'react';
import { useWindowSize } from '../utilitys/hooks';

import Nav from '../components/nav';
import Head from '../components/header';
import ProjectCard from '../components/projectCard';
import ProjectModal from '../components/projectModal';
import About from '../components/about';
import Skills from '../components/skills';
import trees from '../img/trees.png';
import Contact from '../components/footer';
import Background from '../components/background';
import { Context } from '../store/store';

// import styled from 'styled-components';

export default function Home() {
	const [state, dispatch] = useContext(Context);
	const workRef = useRef();
	const aboutRef = useRef();
	const skillsRef = useRef();
	const contactRef = useRef();
	const size = useWindowSize();
	const displayModal = size.width < 768;

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

	const showModal = (id) => {
		dispatch({ type: 'SET_ACTIVE_PROJECT', payload: id });
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: !state.show });
	};
	const hideModal = () => {
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: state.show });
	};
	console.log(size, displayModal);
	return (
		<div className="wrap">
			<Background />
			{displayModal ? (
				<ProjectModal
					show={state.modalShow}
					hideModal={() => hideModal()}
				/>
			) : null}
			<Nav scrollTo={(s) => scrollTo(s)} />
			<Head />
			<div className="all-projects" id="work" ref={workRef}>
				{state.projects.map((project, index) => {
					const { image, previewDescription, id, title } = project;
					const flipped = index % 2 === 0;

					return (
						<ProjectCard
							key={index}
							display={displayModal}
							showModal={() => showModal(id)}
							id={id}
							title={title}
							image={image}
							previewDescription={previewDescription}
							link={`/projects/${id}`}
							flipped={flipped}
						/>
					);
				})}
			</div>
			<About reference={aboutRef} />

			<div className="skills" id="skills" ref={skillsRef}>
				<div className="expertise-container">
					<h2>EXPERTISE</h2>
					<div className="skills__expertise">
						{state.expertise.map((skill, index) => {
							const { image, title, id } = skill;
							return (
								<Skills
									key={index}
									image={image}
									title={title}
									id={id}
								/>
							);
						})}
					</div>
				</div>

				<div className="experience-container">
					<h2>EXPERIENCE</h2>
					<div className="skills__experience">
						{state.experience.map((skill, index) => {
							const { image, title, id } = skill;
							return (
								<Skills
									key={index}
									image={image}
									title={title}
									id={id}
								/>
							);
						})}
					</div>
				</div>
			</div>

			<footer id="contact" ref={contactRef}>
				<div className="trees-container">
					<img src={trees} alt="" />
				</div>

				<div className="contact-container">
					<h2>CONTACT ME</h2>
					<div className="contact-at">
						{state.contactInfo.map((contact, index) => {
							const { alt, image, link } = contact;
							return (
								<Contact
									key={index}
									alt={alt}
									link={link}
									image={image}
								/>
							);
						})}
					</div>

					<span>Website Design by Abigail Chung</span>
				</div>
			</footer>
		</div>
	);
}
