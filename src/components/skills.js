const Skills = ({ id, title, alt, image, link }) => {
	return (
		<div className="skills__definer">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img src={image} className="skill" />
			</a>
		</div>
	);
};

export default Skills;
