import React from 'react';
import { useHistory } from 'react-router-dom';
import back from '../img/back-btn.png';

const ProjectPage = ({ title, image, description }) => {
	const history = useHistory();

	return (
		<div className="project-page">
			<div className="project-page__bak-btn">
				<img src={back} alt="Back" onClick={() => history.push('/')} />
			</div>

			<div className="project-page__project">
				<h1>{title}</h1>
				<div className="project-page__project__i__needed__this__to__make__flex__work">
					<img
						src={image}
						alt={title}
						className="project-page__project__img"
					/>
					<aside>
						<div
							className="project-page__project__description"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>
						<div
							className="project-page__project__description"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>
						<button>View Live Site</button>
					</aside>
				</div>
				<div className="project-page__project__pics">
					<div className="project-page__project__pics-pic">
						<img src="" alt="" />
					</div>
					<div className="project-page__project__pics-pic">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProjectPage;
