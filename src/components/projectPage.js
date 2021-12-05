import React, { useEffect, useContext, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import back from '../img/back-btn.png';
import { Context } from '../store/store';
import Preview from './projectPreviews';

const ProjectPage = ({
	title,
	image,
	description,
	link,
	gitLink,
	id,
	svgImage,
	// video,
	// workPreview0,
	// workPreview1,
	// workPreview2,
	// workPreview3,
	// workPreview4,
	// workPreview5,
	// // pokeWorkDescription0,
	// // sucWorkDescription0
}) => {
	const history = useHistory();
	const location = useLocation();
	const ref = useRef();
	const [state, dispatch] = useContext(Context);

	const nav = document.querySelector('.menu');
	// const img = ref.current;

	useEffect(() => {
		if (location.pathname !== '/') {
			nav.classList.add('hidden');
			console.log(nav);
		} else {
			nav.classList.remove('hidden');
			console.log(nav);
		}
	}, [location]);
	// useEffect(() => {
	// 	if (location.pathname === '/projects/project-title-15') {
	// 		console.log(img);
	// 		console.log(ref.current);
	// 		// ref.current.classList.add('hidden');
	// 	} else {
	// 		console.log(img);
	// 		console.log('hey it the vr project');
	// 	}
	// }, [location]);
	const handleSubmit = (e) => {
		// history.push(`/#${id}`);
		history.goBack();
	};
	return (
		<div className="project-page">
			<div className="project-page__bak-btn">
				<img src={back} alt="Back" onClick={handleSubmit} />
			</div>

			<div className="project-page__project">
				<h1>{title}</h1>
				<div className="project-page__project__i__needed__this__to__make__flex__work">
					{/* <img
						src={image}
						alt={title}
						className="project-page__project__img"
					/> */}
					<div
					className="project-page__project__img"
					dangerouslySetInnerHTML={{ __html: svgImage }}>

					</div>
					
					<aside>
						<div
							className="project-page__project__description"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>

						<div className="links">
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>View Live Site</button>
							</a>
							<a
								href={gitLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>View on Github</button>
							</a>
						</div>
					</aside>
				</div>
		
			</div>
		
		</div>
		
	);
};
export default ProjectPage;
