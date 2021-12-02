import project0 from '../img/constellations/Constellations-17.png';
// import project1 from '../img/constellations/Constellations-02.png';
import project2 from '../img/constellations/Constellations-03.png';
import project3 from '../img/constellations/Constellations-04.png';
import project4 from '../img/constellations/Constellations-05.png';
import project5 from '../img/constellations/Constellations-06.png';
import project6 from '../img/constellations/Constellations-07.png';
// import project7 from '../img/constellations/Constellations-08.png';
import project8 from '../img/constellations/Constellations-09.png';
import project9 from '../img/constellations/Constellations-10.png';
// import project10 from '../img/constellations/Constellations-11.png';
import project11 from '../img/constellations/Constellations-12.png';
import project12 from '../img/constellations/Constellations-13.png';
import project13 from '../img/constellations/Constellations-14.png';
import project14 from '../img/constellations/Constellations-15.png';
import project15 from '../img/constellations/Constellations-16.png';

import expert0 from '../img/skills/expertise/html.png';
import expert1 from '../img/skills/expertise/css.png';
import expert2 from '../img/skills/expertise/sass.png';
import expert3 from '../img/skills/expertise/js.png';
import expert4 from '../img/skills/expertise/axios.png';
import expert5 from '../img/skills/expertise/php.png';
import expert6 from '../img/skills/expertise/sql.png';

import experience0 from '../img/skills/experience/react.png';
import experience1 from '../img/skills/experience/vue.png';
import experience2 from '../img/skills/experience/node.png';
import experience3 from '../img/skills/experience/unity.png';
import experience4 from '../img/skills/experience/spark.png';
import experience5 from '../img/skills/experience/aem.png';
import experience6 from '../img/skills/experience/wordpress.png';

import contact0 from '../img/contact/email.png';
import contact1 from '../img/contact/insta.png';
import contact2 from '../img/contact/git.png';
import contact3 from '../img/contact/linkedin.png';

import workPreview0 from '../img/projectPreviews/jTrap/desktopTop.png';
import workPreview1 from '../img/projectPreviews/jTrap/desktopMiddle.png';
import workPreview2 from '../img/projectPreviews/jTrap/desktopBottom.png';
import workPreview3 from '../img/projectPreviews/jTrap/desktopFooter.png';
import workPreview4 from '../img/projectPreviews/jTrap/mobileTop.png';
import workPreview5 from '../img/projectPreviews/jTrap/mobileMenu.png';

import workPreview6 from '../img/projectPreviews/mafia/firstSlide.jpeg';

import workPreview7 from '../img/projectPreviews/mindMAp/desktop1-min.jpg';
import workPreview8 from '../img/projectPreviews/mindMAp/desktop2-min.jpg';
import workPreview9 from '../img/projectPreviews/mindMAp/desktop3-min.jpg';
import workPreview10 from '../img/projectPreviews/mindMAp/desktop4-min.jpg';

import workPreview11 from '../img/projectPreviews/nodeMEssages/desktop1-min.jpg';
import workPreview12 from '../img/projectPreviews/nodeMEssages/desktop2-min.jpg';
import workPreview13 from '../img/projectPreviews/nodeMEssages/desktop3-min.jpg';
// import workPreview14 from '../img/projectPreviews/nodeMEssages/desktop4-min.jpg';

import workPreview15 from '../img/projectPreviews/poke/poke1-min.jpg';
import workPreview16 from '../img/projectPreviews/poke/poke2-min.jpg';
import workPreview17 from '../img/projectPreviews/poke/poke3-min.jpg';

import workPreview18 from '../img/projectPreviews/succulents/desktop1.jpg';
import workPreview19 from '../img/projectPreviews/succulents/desktop2.jpg';
import workPreview20 from '../img/projectPreviews/succulents/desktop3.jpg';
import workPreview21 from '../img/projectPreviews/succulents/desktop4.jpg';
import workPreview22 from '../img/projectPreviews/succulents/mobile5.jpg';
import workPreview23 from '../img/projectPreviews/succulents/mobile6.jpg';

import workPreview24 from '../img/projectPreviews/tattoos/desktop1-min.jpg';
import workPreview25 from '../img/projectPreviews/tattoos/desktop2-min.jpg';
import workPreview26 from '../img/projectPreviews/tattoos/desktop3-min.jpg';

import workPreview27 from '../img/projectPreviews/thirdWave/desktop1.jpg';
import workPreview28 from '../img/projectPreviews/thirdWave/mobile2.jpg';

import workPreview29 from '../img/projectPreviews/uni/desktop1.jpg';
import workPreview30 from '../img/projectPreviews/uni/desktop2.jpg';
import workPreview31 from '../img/projectPreviews/uni/desktop3.jpg';

const data = {
	activeProjectId: null,
	modalShow: false,
	projectsFlipped: false,
	menuShow: false,
	projects: [
		{
			id: 'project-title-0',
			title: 'Hello there!'.toUpperCase(),
			image: project11,
			medium: 'React, Three.js, SCSS, HTML',
			previewDescription: `This portfolio site is built on React,  uses Three.js for the flying star animations, and  a mix of CSS transforms and vanilla JS scrolling for the page transitions.  For the best effect, view while listening to <a href="https://www.youtube.com/watch?v=5qap5aO4i9A" class="lofi" target="_blank" rel="noopener noreferrer"> Lofi hip hop beats to relax/study to.</a>`,
			link: 'https://github.com/justanothergoonie/codys-portfolioo',
			gitLink: 'https://github.com/justanothergoonie/codys-portfolioo',
		},
		{
			id: 'project-title-13',
			title: 'Johnny Trapeze'.toUpperCase(),
			image: project12,
			medium: 'HTML, SCSS',
			previewDescription: `This responsive single page really well designed website uses CSS only hamburger buttons.`,
			description: `This responsive single page really well designed website uses CSS only hamburger buttons.`,
			workPreview0: workPreview0,
			workPreview1: workPreview1,
			workPreview2: workPreview2,
			workPreview3: workPreview3,
			workPreview4: workPreview4,
			workPreview5: workPreview5,
			link: 'https://www.gooniedev.com/johnnyTrapeze/index.html',
			gitLink: 'https://github.com/justanothergoonie/johnnyTrapeze',
		},
		{
			id: 'project-title-4',
			title: 'Pokemon Finder'.toUpperCase(),
			image: project3,
			medium: 'HTML, JS, AXIOS, Bootstrap',
			previewDescription: `This helper app for Pokemon Go! players uses the Google Maps API and a public Pokedex API to plot likely real world locations for finding in-game pokemon. It uses Axios for AJAX and Bootstrap for styling.`,
			description: `This helper app for Pokemon Go! players uses the Google Maps API and a public Pokedex API to plot likely real world locations for finding in-game pokemon. It uses Axios for AJAX and Bootstrap for styling.`,
			workPreview0: workPreview15,
			workPreview1: workPreview16,
			workPreview2: workPreview17,
			link: 'https://www.gooniedev.com/pokemonFinder/index.html',
			gitLink: 'https://github.com/justanothergoonie/ajaxFinal',
		},
		{
			id: 'project-title-12',
			title: 'Uni'.toUpperCase(),
			image: project13,
			medium: 'HTML, SCSS, JS',
			previewDescription: `This responsive multi-page really well designed website, uses complex design elements and a JS driven hamburger button.`,
			description: `This responsive multi-page really well designed website, uses complex design elements and a JS driven hamburger button.`,
			workPreview0: workPreview29,
			workPreview1: workPreview30,
			workPreview2: workPreview31,
			link: 'https://www.gooniedev.com/uni/index.html',
			gitLink: 'https://github.com/justanothergoonie/uni',
		},
		{
			id: 'project-title-5',
			title: 'Southeast Succulents'.toUpperCase(),
			image: project4,
			medium: 'HTML, JS, SCSS',
			previewDescription: `This responsive e-commerce website has complex angled buttons built with CSS pseudo-classes, custom animated drop-down select elements, and full ARIA accessability.`,
			description: `This responsive e-commerce website has complex angled buttons built with CSS pseudo-classes, custom animated drop-down select elements, and full ARIA accessability.`,
			workPreview0: workPreview18,
			workPreview1: workPreview19,
			workPreview2: workPreview20,
			workPreview3: workPreview21,
			workPreview4: workPreview22,
			workPreview5: workPreview23,
			link: 'https://www.gooniedev.com/southernSucculents/index.html',
			gitLink: 'https://github.com/justanothergoonie/southernSucculents',
		},
		// {
		// 	id: 'project-title-1',
		// 	title: 'Tweet'.toUpperCase(),
		// 	image: project0,
		// 	medium: 'Vue, JS, CSS, HTML',
		// 	previewDescription: `This web app will tell anyone about anything Studio Ghibli related using Vue to create the app and a Ghibli API to provide the data needed, the Giphy API is also used to add some flavor.`,
		// 	description: `This web app will tell anyone about anything Studio Ghibli related using Vue to create the app and a Ghibli API to provide the data needed, the Giphy API is also used to add some flavor.`,
		// 	link: '',
		// 	gitLink: 'https://github.com/justanothergoonie/vue-vinal',
		// },
		{
			id: 'project-title-9',
			title: 'Third Wave Energy'.toUpperCase(),
			image: project8,
			medium: 'HTML, SCSS, JS, Waypoints, SVG Animations',
			previewDescription: `This highly animated, responsive website uses SVGs and Greensock animation platform extensively.`,
			description: `This highly animated, responsive website uses SVGs and Greensock animation platform extensively.`,
			workPreview0: workPreview27,
			workPreview1: workPreview28,
			link: 'https://www.gooniedev.com/sparkySpark/index.html',
			gitLink: 'https://github.com/justanothergoonie/saprkySpark',
		},
		{
			id: 'project-title-6',
			title: 'Mind Brain'.toUpperCase(),
			image: project5,
			medium: 'HTML, SCSS, GSAP, PHP',
			previewDescription: `This web app was created with the purpose of being a huge mind map that starts with one word and spreads throughout the 100,000,000px plane and gets more and more chaotic as it goes.`,
			description: `This web app was created with the purpose of being a huge mind map that starts with one word and spreads throughout the 100,000,000px plane and gets more and more chaotic as it goes. Using php it gets its data from a server so it can be displayed on any screen and you can add words from your phone and see them added to the screen in real time. GSAP is used to see the stylings you apply in real time on your phone. Special thanks to designers Maddie Sherlock and Nick Callender.`,
			workPreview0: workPreview7,
			workPreview1: workPreview8,
			workPreview2: workPreview9,
			workPreview3: workPreview10,
			link: 'http://circuslabs.net/~cody.powell/circus/portfolioPieces/mindbrain/?x=612&y=444.5',
			gitLink: 'https://github.com/justanothergoonie/mind_map',
		},
		{
			id: 'project-title-3',
			title: 'Nguyening Tattoos'.toUpperCase(),
			image: project2,
			medium: 'HTML, SCSS, JS',
			previewDescription: `This responsive site has custom form field styling as well as functionality to prohibit access to those under a certain age, as well as full ARIA accessability. Design was created by consulting with the artist featured.`,
			description: `This responsive site has custom form field styling as well as functionality to prohibit access to those under a certain age, as well as full ARIA accessability. Design was created by consulting with the artist featured.`,
			workPreview0: workPreview24,
			workPreview1: workPreview25,
			workPreview2: workPreview26,
			link: 'https://www.gooniedev.com/nguyenTattoos/index.html',
			gitLink:
				'https://github.com/justanothergoonie/webDev4Week1Homework',
		},

		{
			id: 'project-title-7',
			title: 'Mafia Experience'.toUpperCase(),
			image: project6,
			medium: 'Vanilla JS, GSAP, SVG Animations',
			previewDescription: `This web-based educational experience takes custom character illustrations and animations and brings them to life in a complex side-scrolling website, using SVG,The Greensock animation platform, and vanilla JS.`,
			description: `This web-based educational experience takes custom character illustrations and animations and brings them to life in a complex side-scrolling website, using SVG,The Greensock animation platform, and vanilla JS. 
			Special thanks to designers Maddie Sherlock and Nick Callender.`,
			workPreview0: workPreview6,
			link: 'https://www.gooniedev.com/mafiaProject/index.html',
			gitLink: 'https://github.com/justanothergoonie/mafiaProject',
		},

		{
			id: 'project-title-11',
			title: 'Node Messaging'.toUpperCase(),
			image: project14,
			medium: 'Node.js, Socket.io, Bootstrap, Gulp, Heroku',
			previewDescription: `This simple yet ridiculous web messaging app is a game of sorts with the object being that you're trying to figure out what the other person said using only gifs and synonyms.`,
			description: `This simple yet ridiculous web messaging app is a game of sorts with the object being that you're trying to figure out what the other person said using only gifs and synonyms. It was made using Node.js to create a local server and Socket.io to link two or more people to talk using GIFs brought in with the giphy API and then combined with a dictionary API to pull synonyms of the words from your message. Open the site on more then one device in order to get the full effect and play with the app, see who can stump who the most.`,
			workPreview0: workPreview11,
			workPreview1: workPreview12,
			workPreview2: workPreview13,
			link: 'https://giphymessags.herokuapp.com/',
			gitLink: 'https://github.com/justanothergoonie/nodeGifMessages',
		},
		// {
		// 	id: 'project-title-10',
		// 	title: 'Ping-Pong Clock'.toUpperCase(),
		// 	image: project9,
		// 	medium: 'Arduino Uno, RTC(Real Time Clock), C++',
		// 	previewDescription: `This physical real life clock was made with 180 LED lights and Ping Pong Balls, a RTC, and an Arduino Uno to run the code that makes it work. It required extensive planning and problem solving throughout its creation. `,
		// 	description: `This physical real life clock was made with 180 LED lights and Ping Pong Balls, a RTC, and an Arduino Uno to run the code that makes it work. It required extensive planning and problem solving throughout its creation. `,
		// 	link: '',
		// 	gitLink: '',
		// },
		{
			id: 'project-title-15',
			title: 'VR Music Visualizer'.toUpperCase(),
			image: project15,
			medium: 'Unity, C#, Bolt',
			previewDescription: `This virtual reality experience brings the classic Windows Music Player to life all around you. Using the Unity engine, an Oculus Go 2, and any music files from remix packs found online the songs are brought to life allowing you to see and feel them.`,
			description: `This virtual reality experience brings the classic Windows Music Player to life all around you. Using the Unity engine, an Oculus Go 2, and any music files from remix packs found online the songs are brought to life allowing you to see and feel them.`,
			link: 'https://www.youtube.com/watch?v=sHjcJsvjgaw',
			gitLink: 'https://www.youtube.com/watch?v=sHjcJsvjgaw',
			video: `<iframe width="420" height="345" src='https://www.youtube.com/embed/sHjcJsvjgaw'></iframe>`,
		},
	],
	// projectPreviews: [
	// 	{
	// 		id: 'project-title-13',
	// 	},
	// ],
	expertise: [
		{
			id: 'expert0',
			title: 'HTML',
			alt: 'HTML',
			link: 'https://html.com/',
			image: expert0,
		},
		{
			id: 'expert1',
			title: 'CSS',
			alt: 'CSS',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			image: expert1,
		},
		{
			id: 'expert2',
			title: 'SASS',
			alt: 'SASS',
			link: 'https://sass-lang.com/',
			image: expert2,
		},
		{
			id: 'expert3',
			title: 'Javascript',
			alt: 'Javascript',
			link: 'https://www.javascript.com/',
			image: expert3,
		},
		{
			id: 'expert4',
			title: 'AXIOS',
			alt: 'AXIOS',
			link: 'https://axios-http.com/docs/intro',
			image: expert4,
		},
		{
			id: 'expert5',
			title: 'PHP',
			alt: 'PHP',
			link: 'https://www.php.net/',
			image: expert5,
		},
		{
			id: 'expert6',
			title: 'SQL',
			alt: 'SQL',
			link: 'https://developer.mozilla.org/en-US/docs/Glossary/SQL',
			image: expert6,
		},
		{
			id: 'expert7',
			title: 'React',
			alt: 'React',
			link: 'https://reactjs.org/docs/getting-started.html',
			image: experience0,
		},
	],
	experience: [
		{
			id: 'experience1',
			title: 'Vue',
			alt: 'Vue',
			link: 'https://vuejs.org/v2/guide/',
			image: experience1,
		},
		{
			id: 'experience2',
			title: 'Node.js',
			alt: 'Node.js',
			link: 'https://nodejs.org/en/about/',
			image: experience2,
		},
		{
			id: 'experience3',
			title: 'Unity',
			alt: 'Unity',
			link: 'https://unity.com/learn',
			image: experience3,
		},
		{
			id: 'experience4',
			title: 'Spark.AR',
			alt: 'Spark.AR',
			link: 'https://sparkar.facebook.com/ar-studio/',
			image: experience4,
		},
		{
			id: 'experience5',
			title: 'Adobe Experience Manager',
			alt: 'Adobe Experience Manager',
			link: 'hhttps://business.adobe.com/products/experience-manager/adobe-experience-manager.html',
			image: experience5,
		},
		{
			id: 'experience6',
			title: 'WordPress',
			alt: 'WordPress',
			link: 'https://wordpress.com/',
			image: experience6,
		},
	],
	contactInfo: [
		{
			image: contact0,
			alt: 'Email',
			link: `mailto:thegooniedev@gmail.com?subject=Mail From Portfolio`,
		},
		{
			image: contact1,
			alt: 'Instagram',
			link: `https://www.instagram.com/goonie_dev/`,
		},
		{
			image: contact2,
			alt: 'Git Hub',
			link: `https://github.com/justanothergoonie`,
		},
		{
			image: contact3,
			alt: 'Linked In',
			link: `https://www.linkedin.com/in/cody-powell-b364281a1/`,
		},
	],
};

export default data;
