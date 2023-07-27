import { hoobank, close } from '../assets';

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
		tech: ['ReactJS', 'TailwindCSS'],
		desc: 'HooBank is a modern and user-friendly web application built using ReactJS and Tailwind CSS.',
		desc2:
			"HooBank is a modern and user-friendly web application built using ReactJS and Tailwind CSS. Whether you're on your desktop or mobile device, HooBank's responsive design ensures that you can access your finances anytime, anywhere.",
		images: [`${hoobank}`, `${close}`, `${hoobank}`],
		live: '',
		github: '',
	},
	{
		title: 'Hoobank 2',
		tech: ['ReactJS', 'TailwindCSS'],
		desc: 'elfrlfrferklkl',
		desc2:
			"HooBank is a modern and user-friendly web application built using ReactJS and Tailwind CSS. Whether you're on your desktop or mobile device, HooBank's responsive design ensures that you can access your finances anytime, anywhere.",
		images: [`${hoobank}`, `${hoobank}`, `${hoobank}`],
		live: '',
		github: '',
	},
];

export { projects };
