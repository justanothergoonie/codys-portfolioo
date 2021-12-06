import { useHistory } from 'react-router-dom';

const ProjectCard = ({
	id,
	image,
	svgImage,
	title,
	previewDescription,
	link,
	flipped,
	display,
	showModal,
	medium,
	gitLink,
	alt
}) => {
	const history = useHistory();
	const projectClass = flipped ? 'project project--flipped' : 'project';

	return (
		<div className={projectClass} id={id}>
			<div className="constellation-definer">
				{display ? (
					<img src={image} alt={alt} onClick={showModal} />
				) : (
					<img src={image} alt={alt} />
				)}

			</div>
			<h2 className="mobile-title">{title}</h2>
			<div className="project-info">
				<h2 className="desktop-title">{title}</h2>
				<p dangerouslySetInnerHTML={{ __html: previewDescription }} />

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

				<a
					href={gitLink}
					target="_blank"
					rel="noopener noreferrer"
					className="git"
				>
					VIEW REPO
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
