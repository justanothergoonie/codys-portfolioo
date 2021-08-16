import project0 from '../img/constellations/Constellations-01.png';
import project1 from '../img/constellations/Constellations-02.png';
import project2 from '../img/constellations/Constellations-03.png';
import project3 from '../img/constellations/Constellations-04.png';
import project4 from '../img/constellations/Constellations-05.png';
import project5 from '../img/constellations/Constellations-06.png';
import project6 from '../img/constellations/Constellations-07.png';
import project7 from '../img/constellations/Constellations-08.png';
import project8 from '../img/constellations/Constellations-09.png';
import project9 from '../img/constellations/Constellations-10.png';
import project10 from '../img/constellations/Constellations-11.png';
import project11 from '../img/constellations/Constellations-12.png';
import project12 from '../img/constellations/Constellations-13.png';
import project13 from '../img/constellations/Constellations-14.png';
import project14 from '../img/constellations/Constellations-15.png';

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

import contact0 from '../img/contact/email.png';
import contact1 from '../img/contact/insta.png';
import contact2 from '../img/contact/git.png';
import contact3 from '../img/contact/linkedin.png';

const data = {
	activeProjectId: null,
	modalShow: false,
	projectsFlipped: false,
	menuShow: false,
	projects: [
		{
			id: 'project-title-0',
			title: 'Welcome'.toUpperCase(),
			image: project11,
			medium: 'React, 3.js, SCSS, HTML',
			previewDescription: `This portfolio site is built on React, uses Three.js for the flying star animations,and a mix of CSS transforms and vanilla JS scrolling for the page transitions.`,
			link: '',
			gitLink: '',
		},
		{
			id: 'project-title-13',
			title: 'Johnny Trapeze'.toUpperCase(),
			image: project12,
			medium: 'HTML, SCSS',
			previewDescription: `This responsive single page (what would this type of site be called) uses CSS only hamburger buttons.`,
			description: `This responsive single page (what would this type of site be called) uses CSS only hamburger buttons.`,
			link: 'https://www.gooniedev.com/southernSucculents/index.html',
			gitLink: '',
		},
		{
			id: 'project-title-12',
			title: 'Uni'.toUpperCase(),
			image: project13,
			medium: 'HTML, SCSS, JS',
			previewDescription: `This responsive multi-page (what would this type of site be called), uses complex design elements and a JS driven hamburger button.`,
			description: `This responsive multi-page (what would this type of site be called), uses complex design elements and a JS driven hamburger button.`,
			link: 'https://www.gooniedev.com/southernSucculents/index.html',
			gitLink: '',
		},
		{
			id: 'project-title-5',
			title: 'Southeast Succulents'.toUpperCase(),
			image: project4,
			medium: 'HTML, JS, SCSS',
			previewDescription: `This responsive e-commerce website has complex angled buttons built with CSS pseudo-classes, custom animated drop-down select elements, and full ARIA accessability.`,
			description: `This responsive e-commerce website has complex angled buttons built with CSS pseudo-classes, custom animated drop-down select elements, and full ARIA accessability.`,
			link: 'https://www.gooniedev.com/southernSucculents/index.html',
			gitLink: '',
		},

		{
			id: 'project-title-9',
			title: 'Third Wave Energy'.toUpperCase(),
			image: project8,
			medium: 'HTML, SCSS, JS, GSAP, SVG Animations',
			previewDescription: `This highly animated, responsive website uses SVGs and Greensock animation platform extensively.`,
			description: `This highly animated, responsive website uses SVGs and Greensock animation platform extensively.`,
			link: 'https://www.gooniedev.com/sparkySpark/index.html',
			gitLink: '',
		},
		{
			id: 'project-title-3',
			title: 'Nguyening Tattoos'.toUpperCase(),
			image: project2,
			medium: 'HTML, SCSS, JS',
			previewDescription: `This responsive site has custom form field styling as well as functionality to prohibit access to those under a certain age, as well as full ARIA accessability. Design was created by consulting with the artist featured.`,
			description: `This responsive site has custom form field styling as well as functionality to prohibit access to those under a certain age, as well as full ARIA accessability. Design was created by consulting with the artist featured.`,
			link: 'https://www.gooniedev.com/nguyenTattoos/index.html',
			gitLink: '',
		},
		{
			id: 'project-title-4',
			title: 'Pokemon Finder'.toUpperCase(),
			image: project3,
			medium: 'HTML, JS, AXIOS, Bootstrap',
			previewDescription: `This helper app for Pokemon Go! players uses the Google Maps API and a public Pokedex API to plot likely real world locations for finding in-game pokemon. It uses Axios for AJAX and Bootstrap for styling.`,
			description: `This helper app for Pokemon Go! players uses the Google Maps API and a public Pokedex API to plot likely real world locations for finding in-game pokemon. It uses Axios for AJAX and Bootstrap for styling.`,
			link: 'https://www.gooniedev.com/pokemonFinder/index.html',
			gitLink: '',
		},
		{
			id: 'project-title-1',
			title: 'Ghiblipedia'.toUpperCase(),
			image: project0,
			medium: 'VUE, JS, CSS, HTML',
			previewDescription: `This web app will tell anyone about anything Studio Ghibli related using VUE to create the app and a Ghibli API to provide the data needed, the Giphy API is also used to add some flavor.`,
			description: `This web app will tell anyone about anything Studio Ghibli related using VUE to create the app and a Ghibli API to provide the data needed, the Giphy API is also used to add some flavor.`,
			link: '',
			gitLink: '',
		},
		{
			id: 'project-title-7',
			title: 'Mafia Experience'.toUpperCase(),
			image: project6,
			medium: 'Vanilla JS, GSAP, SVG Animations',
			previewDescription: `This web-based educational experience takes custom character illustrations and animations and brings them to life in a complex side-scrolling website, using SVG, Greensock animation platform, and vanilla JS. 
			Special thanks to designers Maddie Sherlock and Nick Callender.`,
			description: `This web-based educational experience takes custom character illustrations and animations and brings them to life in a complex side-scrolling website, using SVG, Greensock animation platform, and vanilla JS. 
			Special thanks to designers Maddie Sherlock and Nick Callender.`,
			link: 'https://www.gooniedev.com/mafiaProject/index.html',
			gitLink: '',
		},
		{
			id: 'project-title-6',
			title: 'Mind Brain'.toUpperCase(),
			image: project5,
			medium: 'HTML, SCSS, GSAP, PHP',
			previewDescription: `This web app was created with the purpose of being a huge mind map that starts with one word and spreads throughout the 10,000x10,000 plane and gets more and more chaotic as it goes. Using php it gets its data from a server so it can be displayed on any screen and you can add words from your phone and see them added to the screen in real time. GSAP is used to see the stylings you apply in real time on your phone. Special thanks to designers Maddie Sherlock and Nick Callender.`,
			description: `This web app was created with the purpose of being a huge mind map that starts with one word and spreads throughout the 10,000x10,000 plane and gets more and more chaotic as it goes. Using php it gets its data from a server so it can be displayed on any screen and you can add words from your phone and see them added to the screen in real time. GSAP is used to see the stylings you apply in real time on your phone. Special thanks to designers Maddie Sherlock and Nick Callender.`,
			link: '',
			gitLink: '',
		},
		{
			id: 'project-title-11',
			title: 'Node Messaging'.toUpperCase(),
			image: project14,
			medium: 'Node.js, SOCKET.io, Bootstrap, GULP',
			previewDescription: `This simple yet ridiculous web messaging app is a game of sorts with the object being that you're trying to figure out what the other person said using only gifs and synonyms. It was made using Node.js to create a local server and SOCKET.io to link two or more people to talk using GIFs brought in with the giphy API and then combined with a dictionary API to pull synonyms of the words from your message.`,
			description: `This simple yet ridiculous web messaging app is a game of sorts with the object being that you're trying to figure out what the other person said using only gifs and synonyms. It was made using Node.js to create a local server and SOCKET.io to link two or more people to talk using GIFs brought in with the giphy API and then combined with a dictionary API to pull synonyms of the words from your message.`,
			link: '',
			gitLink: '',
		},
		{
			id: 'project-title-10',
			title: 'Ping-Pong Clock'.toUpperCase(),
			image: project9,
			medium: 'Arduino Uno, RTC(Real Time Clock), C++',
			previewDescription: `This physical real life clock was made with 180 LED lights and Ping Pong Balls, a RTC, and an Arduino Uno to run the code that makes it work. It required extensive planning and problem solving throughout its creation. `,
			description: `This physical real life clock was made with 180 LED lights and Ping Pong Balls, a RTC, and an Arduino Uno to run the code that makes it work. It required extensive planning and problem solving throughout its creation. `,
			link: '',
			gitLink: '',
		},
		// {
		// 	id: 'project-title-2',
		// 	title: 'Our Solar System'.toUpperCase(),
		// 	image: project1,
		// 	previewDescription: `Lorem ipsum dolor sit amet consectetur
		//     adipisicing elit. Corporis similique officiis
		//     quidem id ad architecto totam eius hic.`,
		// 	description: `Lorem ipsum dolor sit amet consectetur
		//         adipisicing elit. Corporis similique officiis
		//         quidem id ad architecto totam eius hic dicta
		//         consequatur fugiat, odit praesentium, quibusdam
		//         veritatis debitis excepturi provident eos
		//         temporibus?`,
		// 	link: 'https://www.gooniedev.com/keyFrameSolarSystem/index.html',
		// },

		// {
		// 	id: 'project-title-8',
		// 	title: 'Spotify Stats Redesign'.toUpperCase(),
		// 	image: project7,
		// 	previewDescription: `Lorem ipsum dolor sit amet consectetur
		//     adipisicing elit. Corporis similique officiis
		//     quidem id ad architecto totam eius hic.`,
		// 	description: `Lorem ipsum dolor sit amet consectetur
		//         adipisicing elit. Corporis similique officiis
		//         quidem id ad architecto totam eius hic dicta
		//         consequatur fugiat, odit praesentium, quibusdam
		//         veritatis debitis excepturi provident eos
		//         temporibus?`,
		// 	link: '',
		// },
		// {
		// 	id: 'project-title-9',
		// 	title: 'Third Wave Energy'.toUpperCase(),
		// 	image: project8,
		// 	medium: 'HTML, SCSS, JS, GSAP, SVG Animations',
		// 	previewDescription: `This highly animated, responsive website uses SVGs and Greensock animation platform extensively.`,
		// 	description: `This highly animated, responsive website uses SVGs and Greensock animation platform extensively.`,
		// 	link: 'https://www.gooniedev.com/sparkySpark/index.html',
		// },
	],
	expertise: [
		{
			id: 'expert0',
			title: 'HTML',
			alt: 'HTML',
			image: expert0,
		},
		{
			id: 'expert1',
			title: 'CSS',
			alt: 'CSS',
			image: expert1,
		},
		{
			id: 'expert2',
			title: 'SASS',
			alt: 'SASS',
			image: expert2,
		},
		{
			id: 'expert3',
			title: 'Javascript',
			alt: 'Javascript',
			image: expert3,
		},
		{
			id: 'expert4',
			title: 'AXIOS',
			alt: 'HTML',
			image: expert4,
		},
		{
			id: 'expert5',
			title: 'PHP',
			alt: 'HTML',
			image: expert5,
		},
		{
			id: 'expert6',
			title: 'SQL',
			alt: 'SQL',
			image: expert6,
		},
	],
	experience: [
		{
			id: 'experience0',
			title: 'React',
			alt: 'React',
			image: experience0,
		},
		{
			id: 'experience1',
			title: 'Vue',
			alt: 'Vue',
			image: experience1,
		},
		{
			id: 'experience2',
			title: 'Node.js',
			alt: 'Node.js',
			image: experience2,
		},
		{
			id: 'experience3',
			title: 'Unity',
			alt: 'Unity',
			image: experience3,
		},
		{
			id: 'experience4',
			title: 'Spark.AR',
			alt: 'Spark.AR',
			image: experience4,
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
