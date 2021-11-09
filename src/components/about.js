import me from '../img/me/me.jpg';

const About = ({ reference, image }) => {
	return (
		<div className="about" id="about" ref={reference}>
			<div className="about__pic">
				<img src={me} alt="me" className="me" />
			</div>
			<div className="about__info">
				<h2>ABOUT ME</h2>
				<p>
					Enthusiastic developer eager to contribute to team success
					through hard work, attention to detail and excellent
					organizational skills. Clear understanding of HTML and CSS
					and training in React js. Motivated to learn, grow and
					excel.
				</p>
				<div className="resume">
					<h3>Resumé</h3>
					<div className="links">
						<a
							href="https://gooniedev.com/colorResume.pdf"
							download="Cody Powell's Resume"
						>
							<button>
								<h4>For Creativity</h4>
								<span>(Color)</span>
							</button>
						</a>
						<a
							href="https://gooniedev.com/bnwResume.pdf"
							download="Cody Powell's Resume"
						>
							<button>
								<h4>For Print</h4>
								<span>(B/W)</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
