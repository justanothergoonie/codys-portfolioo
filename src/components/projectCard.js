import { useHistory } from 'react-router-dom';

const ProjectCard = ({ image, title, previewDescription, link, flipped, display, showModal }) => {
	const history = useHistory();
	const projectClass = flipped ? 'project project--flipped' : 'project';
	
	return (
		<div className={projectClass}>
			{display ? (
				<img src={image} alt={title} onClick={showModal} />
			) : (
				<img src={image} alt={title} />
			)}
			<div className="project-info">
				<h2>{title}</h2>
				<p>
					{previewDescription}
				</p>
				<button onClick={() => history.push(link)}>
					VIEW
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
