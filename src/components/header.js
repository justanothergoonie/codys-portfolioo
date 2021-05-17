import Logo from '../logofile.png';
const Header = () => {
	return (
		<div className="head">
			<div className="head__logo-holder">
				<img src={Logo} alt="logo" className="logo" />
			</div>
			<div className="head__info">
				<h2>Cody Powell</h2>
				<p>Full Stack Developer</p>
			</div>
		</div>
	);
};

export default Header;
