import Logo from '../logofile.png';
const Header = () => {
	return (
		<div className="head">
			<div className="head__logo-holder">
				<img src={Logo} alt="logo" className="logo" />
			</div>
			<div className="head__info">
				<h1>CODY POWELL</h1>
				<span>Full Stack Developer</span>
			</div>
		</div>
	);
};

export default Header;
