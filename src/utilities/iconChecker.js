const iconChecker = function () {
	let favIcon = document.querySelector('.favicon');
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		console.log('hello world, its dark in here');

		favIcon.setAttribute('href', '%PUBLIC_URL%/darkMode.ico');
	} else {
		favIcon.setAttribute('href', '%PUBLIC_URL%/lightMode.ico');
	}
};
export { iconChecker };
