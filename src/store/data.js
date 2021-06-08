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
			id: 'project-title-1',
			title: 'Studio Ghibli VUE Project'.toUpperCase(),
			image: project0,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: '',
		},
		{
			id: 'project-title-2',
			title: 'Planetary Rotation Key Frames'.toUpperCase(),
			image: project1,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: 'https://www.gooniedev.com/keyFrameSolarSystem/index.html',
		},
		{
			id: 'project-title-3',
			title: 'SEO Tattoo Website'.toUpperCase(),
			image: project2,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: 'https://www.gooniedev.com/nguyenTattoos/index.html',
		},
		{
			id: 'project-title-4',
			title: 'Pokemon Finder'.toUpperCase(),
			image: project3,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: 'https://www.gooniedev.com/pokemonFinder/index.html',
		},
		{
			id: 'project-title-5',
			title: 'Southeast Succulents redesign'.toUpperCase(),
			image: project4,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: 'https://www.gooniedev.com/southernSucculents/index.html',
		},
		{
			id: 'project-title-6',
			title: 'Mind Brain'.toUpperCase(),
			image: project5,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: '',
		},
		{
			id: 'project-title-7',
			title: 'Mafia Side Scroller with GSAP'.toUpperCase(),
			image: project6,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: 'https://www.gooniedev.com/mafiaProject/index.html',
		},
		{
			id: 'project-title-8',
			title: 'Spotify Stats Redesign'.toUpperCase(),
			image: project7,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: '',
		},
		{
			id: 'project-title-9',
			title: 'Renewable Energy Redesign'.toUpperCase(),
			image: project8,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: 'https://www.gooniedev.com/sparkySpark/index.html',
		},
		{
			id: 'project-title-10',
			title: 'LED Ping-Pong Ball Clock'.toUpperCase(),
			image: project9,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `The idea was to make a clock, but the purpose was to make it cool. Using an ArduinoUNO, 180 LEDS, 180 ping pong balls,a bit of wood and mat board a bright vibrant color changing display that could be used for more than just a clock was made, but i mostly use it to keep time, what could you use it for?`,
			link: '',
		},
		{
			id: 'project-title-11',
			title: 'PHP DND Character Creator'.toUpperCase(),
			image: project10,
			previewDescription: `Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis similique officiis
            quidem id ad architecto totam eius hic.`,
			description: `Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis similique officiis
                quidem id ad architecto totam eius hic dicta
                consequatur fugiat, odit praesentium, quibusdam
                veritatis debitis excepturi provident eos
                temporibus?`,
			link: '',
		},
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
