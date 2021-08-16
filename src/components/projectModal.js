import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../store/store';
import { useHistory } from 'react-router-dom';

import closeButton from '../img/close-btn.png';

const ProjectModal = ({ show, hideModal }) => {
	const history = useHistory();
	const ref = useRef();
	const [project, setProject] = useState(null);

	const [state] = useContext(Context);
	const modalClass = show
		? 'project-modal project-modal--show'
		: 'project-modal';
	const modalOverlayClass = show
		? 'modal-overlay modal-overlay--show'
		: 'modal-overlay';

	useEffect(() => {
		const selectedProject = state.projects.filter(
			(project) => project.id === state.activeProjectId
		)[0];
		setProject(selectedProject);
	}, [state.activeProjectId, state.projects]);

	return project ? (
		<>
			<div className={modalOverlayClass} onClick={hideModal}></div>
			<div ref={ref} className={modalClass}>
				<div className="cls-butt-definer">
					<img
						src={closeButton}
						alt="close-button"
						className="cls-butt"
						onClick={hideModal}
					/>
				</div>
				<div className="constellation-definer">
					<img
						src={project.image}
						alt={project.title}
						className="modal-image"
					/>
				</div>

				<div className="project-info-modal">
					{/* <h2>{project.title}</h2> */}
					<p>{project.previewDescription}</p>
					<button
						onClick={() => {
							document.querySelector(
								'.page'
							).style.transformOrigin =
								'50% ' +
								((window.scrollY + window.innerHeight / 2) /
									document.body.scrollHeight) *
									100 +
								'%';
							history.push(`/projects/${project.id}`);
						}}
					>
						VIEW
					</button>
				</div>
			</div>
		</>
	) : null;
};

export default ProjectModal;
