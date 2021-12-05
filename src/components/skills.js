import ToolTip from './toolTip';

const Skills = ({ id, title, alt, image, link }) => {
	return (
		<div className="skills__definer">
			<ToolTip text={title}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img src={image} alt={alt} className="skill" />
			</a>
			</ToolTip>
		</div>
	);
};

export default Skills;
