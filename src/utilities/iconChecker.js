const iconChecker = function () {
	let favIcon = document.querySelector('.favicon');
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		// console.log('hello world, its dark in here');

		favIcon.setAttribute('href', '/darkMode.ico');
	} else {
		favIcon.setAttribute('href', '/lightMode.ico');
	}
};
export { iconChecker };
