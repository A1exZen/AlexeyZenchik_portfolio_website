import { close } from '../assets';
import { mainHoobank, hero, payMetods } from '../assets/hoobank';
import { possibilities, heroGPT3, mobileGPT3 } from '../assets/gpt-3';
import { main3D, overview, projects3D } from '../assets/3D-portfolio';
import { mainSumm, heroSumm, summ } from '../assets/ai-summarize';
import { mainBrella, stat } from '../assets/brella';

export const navLinks = [
	{
		id: 'home',
		title: 'Home',
	},
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'experience',
		title: 'Exp.',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const projects = [
	{
		title: 'Hoobank',
		tech: ['ReactJS', 'TailwindCSS', 'Responsive', 'Framer Motion'],
		desc: 'HooBank is a modern and user-friendly web application built using ReactJS and Tailwind CSS.',
		desc2:
			"HooBank is a modern and user-friendly web application built using ReactJS and Tailwind CSS. Whether you're on your desktop or mobile device, HooBank's responsive design ensures that you can access your finances anytime, anywhere.",
		images: [`${mainHoobank}`, `${hero}`, `${payMetods}`],
		live: 'https://hoobank-az.vercel.app/',
		github: 'https://github.com/A1exZen/hoobank-website',
	},
	{
		title: 'GPT-3',
		tech: ['ReactJS', 'CSS BEM Model', 'Responsive '],
		desc: 'Its a fully functioning website with modern and responsive design',
		desc2:
			'GPT-3 - Its a fully functioning website with modern and responsive design using ReactJS.',
		images: [`${heroGPT3}`, `${possibilities}`],
		live: 'https://gpt-3-az.vercel.app/',
		github: 'https://github.com/A1exZen/gpt-3_website',
	},
	{
		title: '3D Portfolio',
		tech: [
			'ReactJS',
			'ThreeJS',
			'TailwindCSS',
			'React Router',
			'Framer Motion',
			'Maath',
			'React Tilt',
		],
		desc: 'My first acquaintance with the amazing world of 3D using ThreeJS.',
		desc2:
			'ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model. I tried to learn how to upload, create and customize stunning 3D models and geometries with different lighting, as well as explore the 3D world using a camera and positioning an object in space.',
		images: [`${main3D}`, `${overview}`, `${projects3D}`],
		live: 'https://3d-portfolio-az.vercel.app/',
		github: 'https://github.com/A1exZen/3D-Portfolio',
	},
	{
		title: 'Summarize Articles with AI',
		tech: ['ReactJS', 'TailwindCSS', 'API'],
		desc: 'Simplify your reading with an open-source article summarizer that transforms lengthy articles into clear and concise summaries',
		desc2: `
			-	 Vite ReactJS
		  -  Responsive, beautiful user interface using Tailwind CSS
		  -  Advanced RTK query API requests
			-  Save history using local storage
		  -  Form event handling and error interception
			-  Copy to clipboard
		  -  Clean code`,
		images: [`${mainSumm}`, `${heroSumm}`, `${summ}`],
		live: 'https://ai-summarizer-az.vercel.app/',
		github: 'https://github.com/A1exZen/ai-summarizer',
	},
	{
		title: 'Brella',
		tech: ['HTML', 'SCSS', 'Responsive'],
		desc: 'A beautiful and responsive website created with scss.',
		desc2: 'A beautiful and responsive website created with scss.',
		images: [`${mainBrella}`, `${stat}`],
		live: 'https://brella-landing-page-az.vercel.app/',
		github: 'https://github.com/A1exZen/Brella_landing-page',
	},
];

export { projects };
