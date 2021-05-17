import React from 'react';
import { useHistory } from 'react-router-dom';
import back from '../img/back-btn.png';

const ProjectPage = ({ title, image, description }) => {
	const history = useHistory();

	return (
		<div className="project-page">
			<div>
				<img
					src={back}
					alt="Back"
					className="project-page__bak-btn"
					onClick={() => history.push('/home')}
				/>
			</div>

			<h1>{title}</h1>

			<div className="project-page__project">
				<img
					src={image}
					alt={title}
					className="project-page__project__img"
				/>
				<aside>
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
					<button>View Live Site</button>
				</aside>
			</div>
			<div className="project-page__pics">
				<div className="project-page__pics-pic">
					<img src="" alt="" />
				</div>
				<div className="project-page__pics-pic">
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
};
export default ProjectPage;
