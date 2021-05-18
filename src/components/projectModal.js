import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/store';
import { useHistory } from 'react-router-dom';

import closeButton from '../img/close-btn.png';

const ProjectModal = ({ show, hideModal, link }) => {
	const history = useHistory();
	const [project, setProject] = useState(null);
	const [state] = useContext(Context);
	const modalClass = show
		? 'project-modal project-modal--show'
		: 'project-modal';

	useEffect(() => {
		const selectedProject = state.projects.filter(
			(project) => project.id === state.activeProjectId
		)[0];
		setProject(selectedProject);
	}, [state.activeProjectId, state.projects]);

	return project ? (
		<>
			{/* <div className="modal-overlay" onClick={hideModal}></div> */}
			<div className={modalClass}>
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
					<h2>{project.title}</h2>
					<p>{project.previewDescription}</p>
					<button onClick={() => history.push(link)}>VIEW</button>
				</div>
			</div>
		</>
	) : null;
};

export default ProjectModal;
