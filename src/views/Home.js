import React, { useContext } from 'react';
import { useWindowSize } from '../utilitys/hooks';

import Nav from '../components/nav';
import Head from '../components/header';
import ProjectCard from '../components/projectCard';
import ProjectModal from '../components/projectModal';
import About from '../components/about';
import Skills from '../components/skills';
import Contact from '../components/footer';
import { Context } from '../store/store';
// import styled from 'styled-components';

export default function Home() {
	const [state, dispatch] = useContext(Context);
	const size = useWindowSize();
	const displayModal = size.width < 1024;

	const showModal = (id) => {
		dispatch({ type: 'SET_ACTIVE_PROJECT', payload: id });
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: !state.show });
	};

	return (
		<div className="wrap">
			{displayModal ? <ProjectModal show={state.modalShow} /> : null}
			<Nav />
			<Head />
			<div className="all-projects">
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

			<div className="skills">
				<div className="skills__Expertise">
					<h2>Expertise</h2>
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
				<div className="skills__Expertise">
					<h2>Experience</h2>
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
			<footer>
				<h2>CONTACT ME</h2>
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
				<span>Website Design by Abigail Chung</span>
			</footer>
		</div>
	);
}
