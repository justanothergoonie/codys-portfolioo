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
					What does space, cooking, anime, and an endless supply of
					memes have in common? Probably a lot of things. But also me,
					Cody. As a developer, I spend a lot of my time in front of a
					screen. So whenever I get a chance to escape, I spend it
					outdoors hiking or camping. However, if it’s nice and dreary
					out, then a good JRPG or D&amp;D session will do.
				</p>
				<br></br>
				<p>
					I'm an Enthusiastic and eager to contribute to team success
					through hard work, attention to detail and excellent
					organizational skills. I have clear understanding of HTML,
					responsive CSS, vanilla JS, and training in React js; I'm
					always excited to learn, grow and excel.
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
