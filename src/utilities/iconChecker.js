const iconChecker = function () {
	let favIcon = document.querySelector('.favicon');
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
	

		favIcon.setAttribute('href', '/darkMode.ico');
	} else {
		favIcon.setAttribute('href', '/lightMode.ico');
	}
};
export { iconChecker };
