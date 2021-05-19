const About = ({ reference }) => {
	return (
		<div className="about" id="about" ref={reference}>
			<div className="about__pic">
				<img src="" alt="me" className="me" />
			</div>
			<div className="about__info">
				<h2>ABOUT ME</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatibus temporibus eos nostrum incidunt tempore
					eligendi fuga illum labore excepturi rem! Nesciunt quidem
					sequi atque, illum nihil deleniti dicta deserunt reiciendis?
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Provident exercitationem eligendi inventore perferendis nemo
					soluta accusantium animi sint perspiciatis magnam dolorum
					rem aspernatur laudantium tenetur laborum quaerat, iste ab
					praesentium.
				</p>
			</div>
		</div>
	);
};

export default About;
