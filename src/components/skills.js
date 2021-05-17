const Skills = ({ id, title, alt, image }) => {
	return (
		<div className="skills__definer">
			<img src={image} alt={alt} className="skill" />
		</div>
	);
};

export default Skills;
