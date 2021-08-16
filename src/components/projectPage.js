import React, { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import back from '../img/back-btn.png';
import { Context } from '../store/store';

const ProjectPage = ({ title, image, description, link }) => {
	const history = useHistory();
	const location = useLocation();
	const [state, dispatch] = useContext(Context);

	const nav = document.querySelector('.menu');

	useEffect(() => {
		if (location.pathname !== '/') {
			nav.classList.add('hidden');
		} else {
			nav.classList.remove('hidden');
		}
	}, [location]);

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
						{/* <div
							className="project-page__project__description"
							dangerouslySetInnerHTML={{ __html: description }}
						></div> */}
						<div className="links">
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button>View Live Site</button>
							</a>
						</div>

						<a href="" target="_blank" rel="noopener noreferrer">
							<button>View on Github</button>
						</a>
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
