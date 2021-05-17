const Contact = ({ alt, image, link }) => {
	return (
		<div>
			<a href={link} target="_blank">
				<img src={image} alt={alt} className="contact" />
			</a>
		</div>
	);
};

export default Contact;
