import { useHistory } from 'react-router-dom';

const ProjectCard = ({
	image,
	title,
	previewDescription,
	link,
	flipped,
	display,
	showModal,
	medium,
}) => {
	const history = useHistory();
	const projectClass = flipped ? 'project project--flipped' : 'project';

	return (
		<div className={projectClass}>
			<div className="constellation-definer">
				{display ? (
					<img src={image} alt={title} onClick={showModal} />
				) : (
					<img src={image} alt={title} />
				)}
			</div>
			<h2 className="mobile-title">{title}</h2>
			<div className="project-info">
				<h2 className="desktop-title">{title}</h2>
				<p>{previewDescription}</p>
				<span>Technology used: {medium}</span>
				<button
					onClick={() => {
						// this is some hacky nonsense
						document.querySelector('.page').style.transformOrigin =
							'50% ' +
							((window.scrollY + window.innerHeight / 2) /
								document.body.scrollHeight) *
								100 +
							'%';
						history.push(link);
					}}
				>
					VIEW
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
