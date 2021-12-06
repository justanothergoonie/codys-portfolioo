import React, { useContext } from 'react';
import { useWindowSize } from '../utilities/hooks';
import { iconChecker } from '../utilities/iconChecker';

import Head from '../components/header';
import ProjectCard from '../components/projectCard';
import ProjectModal from '../components/projectModal';
import About from '../components/about';
import Skills from '../components/skills';
import trees from '../img/trees.png';
import Contact from '../components/footer';


import { Context } from '../store/store';

export default function Home({ workRef, aboutRef, skillsRef, contactRef }) {
	iconChecker();
	const [state, dispatch] = useContext(Context);

	const size = useWindowSize();
	const displayModal = size.width < 768;

	const showModal = (id) => {
		dispatch({ type: 'SET_ACTIVE_PROJECT', payload: id });
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: !state.show });
	};
	const hideModal = () => {
		dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: state.show });
	};


	return (
		<div className="wrap">
			{displayModal ? (
				<ProjectModal
					show={state.modalShow}
					hideModal={() => hideModal()}
				/>
			) : null}

			<Head />
			<a href="#project-title-6"></a>
			<div className="all-projects" id="work" ref={workRef}>
				{state.projects.map((project, index) => {
					const {
						image,
						previewDescription,
						id,
						title,
						medium,
						gitLink,
						alt,
						svgImage
					} = project;
					const flipped = index % 2 === 0;

					return (
						<ProjectCard
							key={index}
							display={displayModal}
							showModal={() => showModal(id)}
							id={id}
							title={title}
							alt={alt}
							image={image}
							svgImage={svgImage}
							medium={medium}
							previewDescription={previewDescription}
							link={`/projects/${id}`}
							flipped={flipped}
							gitLink={gitLink}
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
							const { image, title, id, alt, link } = skill;
							return (
								<Skills
									key={index}
									image={image}
									title={title}
									id={id}
									alt={alt}
									link={link}
								/>
							);
						})}
					</div>
				</div>

				<div className="experience-container">
					<h2>EXPERIENCE</h2>
					<div className="skills__experience">
						{state.experience.map((skill, index) => {
							const { image, title, id, alt, link } = skill;
							return (
								<Skills
									key={index}
									image={image}
									title={title}
									id={id}
									alt={alt}
									link={link}
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

					<span>
						Website Design by{' '}
						<a
							className="abi"
							href="http://www.abigailchung.com"
							rel="noopener noreferrer"
						>
							Abigail Chung
						</a>{' '}
					</span>
				</div>
			</footer>
		</div>
	);
}
