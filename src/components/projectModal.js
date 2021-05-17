import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/store';
import { useHistory } from 'react-router-dom';

const ProjectModal = ({ show }) => {
	const history = useHistory();
	const [project, setProject] = useState(null);
    const [state,] = useContext(Context);
    const modalClass = show ? 'project-modal project-modal--show' : 'project-modal';

    useEffect(() => {
        const selectedProject = state.projects.filter((project) => project.id === state.activeProjectId)[0];
        setProject(selectedProject);
	}, [state.activeProjectId, state.projects]);

	return project ? (
		<div className={modalClass}>
            <img src={project.image} alt={project.title} />
			<div className="project-info">
				<h2>{project.title}</h2>
				<p>
					{project.previewDescription}
				</p>
				<button onClick={() => history.push(project.link)}>
					VIEW
				</button>
			</div>
		</div>
	) : null;
};

export default ProjectModal;
