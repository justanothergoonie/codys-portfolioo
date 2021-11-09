import React, { useEffect, useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Context } from '../store/store';

import ProjectPage from '../components/projectPage';

export default function Project() {
	const [mounted, setMounted] = useState(false);
	const [project, setProject] = useState(null);
	const location = useLocation();
	const [state] = useContext(Context);

	let params = useParams();
	var scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		if (!mounted) {
			const selectedProject = state.projects.filter(
				(project) => project.id === params.id
			)[0];
			setProject(selectedProject);
			setMounted(!mounted);
			setTimeout(scrollToTop, 300);
		}
	}, [mounted, params.id, state.projects]);

	return (
		<div className="wrap">
			{mounted ? (
				<ProjectPage
					title={project.title}
					image={project.image}
					description={project.description}
					link={project.link}
					gitLink={project.gitLink}
					id={project.id}
					video={project.video}
				/>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
