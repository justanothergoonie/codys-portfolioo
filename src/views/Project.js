import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/store';

import ProjectPage from '../components/projectPage';
import Nav from '../components/nav';
// import styled from 'styled-components';

export default function Project() {
	const [mounted, setMounted] = useState(false);
	const [project, setProject] = useState(null);
	const [state,] = useContext(Context);
	let params = useParams();

	useEffect(() => {
		if (!mounted) {
			const selectedProject = state.projects.filter((project) => project.id === params.id)[0];
			setProject(selectedProject);
			setMounted(!mounted);
		}
	}, [mounted, params.id, state.projects]);

	return (
		<div className="wrap">
			<Nav />
			{mounted ? (
				<ProjectPage title={project.title} image={project.image} description={project.description} />
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
