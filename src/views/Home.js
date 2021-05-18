import React, { useContext } from 'react';
import { useWindowSize } from '../utilitys/hooks';

import Nav from '../components/nav';
import Head from '../components/header';
import ProjectCard from '../components/projectCard';
import ProjectModal from '../components/projectModal';
import About from '../components/about';
import Skills from '../components/skills';
import trees from '../img/trees.png';
import Contact from '../components/footer';
import { Context } from '../store/store';
// import styled from 'styled-components';

export default function Home() {
	const [state, dispatch] = useContext(Context);
	const size = useWindowSize();
	const displayModal = size.width < 1024;
	const flipProjects = size.width < 1024;

	const showModal = (id) => {
		dispatch({ type: 'SET_ACTIVE_PROJECT', payload: id });
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: !state.show });
	};
	const hideModal = () => {
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: state.show });
	};
	// const flippedProjects = () => {
	// 	dispatch({ type: 'TOGGLE_FLIPPED_PROJECTS', payload: !state.show });
	// }

	return (
		<div className="wrap">
			{displayModal ? (
				<ProjectModal
					show={state.modalShow}
					hideModal={() => hideModal()}
				/>
			) : null}
			{/* {flipProjects ? <ProjectCard show={state.projectsFlipped} /> : null} */}
			{/* how would i center projects on less then 1024 */}
			<Nav />
			<Head />
			<div className="all-projects" id="work">
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
			<About />

			<div className="skills" id="skills">
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

			<footer id="contact">
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
