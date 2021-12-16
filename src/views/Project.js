import React, { useEffect, useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Context } from '../store/store';

import ProjectPage from '../components/projectPage';
import Preview from '../components/projectPreviews'

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
				<div>
				<ProjectPage
					title={project.title}
					image={project.image}
					svgImage={project.svgImage}
					description={project.description}
					link={project.link}
					gitLink={project.gitLink}
					id={project.id}
					
				/>
				<Preview 
						video={project.video}
						workPreview0={project.workPreview0}
						workPreview1={project.workPreview1}
						workPreview2={project.workPreview2}
						workPreview3={project.workPreview3}
						workPreview4={project.workPreview4}
						workPreview5={project.workPreview5}
						workPreview6={project.workPreview6}
						workPreview7={project.workPreview7}
						workPreview8={project.workPreview8}
						workPreview9={project.workPreview9}
						trapWorkDescription0={project.trapWorkDescription0}
						trapWorkDescription1={project.trapWorkDescription1}
						pokeWorkDescription0={project.pokeWorkDescription0}
						pokeWorkDescription1 ={project.pokeWorkDescription1} 
						pokeWorkDescription2 ={project.pokeWorkDescription2}
						sucWorkDescription0={project.sucWorkDescription0}
						sucWorkDescription1={project.sucWorkDescription1}
						sucWorkDescription2={project.sucWorkDescription2}
						uniWorkDescription0={project.uniWorkDescription0}
						uniWorkDescription1={project.uniWorkDescription1}
						energyWorkDescription0={project.energyWorkDescription0}
						tatWorkDescription0={project.tatWorkDescription0}
						tatWorkDescription1={project.tatWorkDescription1}
						mindWorkDescription0={project.mindWorkDescription0}
						mindWorkDescription1={project.mindWorkDescription1}
						mindWorkDescription2={project.mindWorkDescription2}
						mindWorkDescription3={project.mindWorkDescription3}	
						mafiaWorkDescription0={project.mafiaWorkDescription0}
						nodeWorkDescription0={project.nodeWorkDescription0}
						nodeWorkDescription1={project.nodeWorkDescription1}
						nodeWorkDescription2={project.nodeWorkDescription2}	
						pingWorkDescription0={project.pingWorkDescription0}	
						pingWorkDescription1={project.pingWorkDescription1}	
						pingWorkDescription2={project.pingWorkDescription2}	
						vidNote={project.vidNote}			
				/>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
