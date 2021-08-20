import color from '../img/resumes/colorResume.jpg';
import blacknwhite from '../img/resumes/bnwResume.jpg';

const About = ({ reference }) => {
	return (
		<div className="about" id="about" ref={reference}>
			<div className="about__pic">
				<img src="" alt="me" className="me" />
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
					<h3>Resume</h3>
					<div className="links">
						<a href={color} download="Cody Powell's Resume">
							<button>
								<h4>For Creativity</h4>
								<span>(Color)</span>
							</button>
						</a>
						<a href={blacknwhite} download="Cody Powell's Resume">
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
