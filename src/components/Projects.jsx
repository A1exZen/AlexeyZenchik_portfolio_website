import { useState } from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { zoomOut } from '../utils/motion';

import { projects, bestProjects } from '../constants';

const Projects = () => {
	return (
		<section id='projects' className='section-wrapper'>
			<div className='flex flex-row items-center justify-between gap-[2.4rem] mb-[2.4rem]'>
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
						width: '100%',
					}}
					transition={{
						duration: '1',
					}}
					viewport={{ once: true }}
					className='w-[50px] h-[1px] bg-[var(--text)] opacity-30'
				/>
				<motion.h3
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					variants={zoomOut('left', 0.2, 0.4)}
					className='text-[length:--text-xl] font-[900] text-end'
				>
					Projects
					<span className='text-[var(--brand)] text-[length:--text-xl]'>.</span>
				</motion.h3>
			</div>
			<div className='md:p-10 mb-10 '>
				{bestProjects.map(project => (
					<ProjectCard key={project.title} project={project} big={true} />
				))}
			</div>
			<div className='grid sm:grid-cols-[1fr_1fr] gap-[3.2rem]'>
				{projects.map(project => (
					<ProjectCard key={project.title} project={project} big={false} />
				))}
			</div>
		</section>
	);
};

export const ProjectCard = ({ project, big }) => {
	const [isOpen, setIsOpen] = useState(false);

	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	return (
		<div>
			<div
				className='flex justify-center items-center w-full bg-[--background-light] relative cursor-pointer rounded-xl overflow-hidden'
				style={{ aspectRatio: '16/9' }}
			>
				<img
					src={project.images[0]}
					alt={project.title}
					onClick={() => {
						setIsOpen(true);
					}}
					className='w-[85%] h-[auto] absolute translate-y-20  hover:scale-[1.05] hover:translate-y-10  transition-all duration-[350ms] rounded-[0.5rem]'
				/>
			</div>
			<div className='my-[1.6rem]'>
				<div className='flex items-center gap-[1.2rem] w-full '>
					<h4 className='max-w-[calc(100% - 150px)] font-[700] shrink-0 text-[length:--text-md]'>
						{project.title}
					</h4>
					<div className='w-full h-[1px] bg-[--text] opacity-30' />
					<a
						alt='github'
						target='_blank'
						href={project.github}
						className='opacity-75 transition-opacity duration-75'
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							viewBox='0 0 1024 1024'
							height='2.5rem'
							width='2.5rem'
							xmlns='http://www.w3.org/2000/svg'
							className='hover:fill-[var(--brand)] transition-all duration-150 '
						>
							<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
						</svg>
					</a>
					<a
						alt='live'
						target='_blank'
						href={project.live}
						className='opacity-75 transition-opacity duration-75'
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							viewBox='0 0 1024 1024'
							height='2.5rem'
							width='2.5rem'
							xmlns='http://www.w3.org/2000/svg'
							className='hover:fill-[var(--brand)] transition-all duration-150 '
						>
							<path d='M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z'></path>
						</svg>
					</a>
				</div>
				<div className='relative w-fit'>
					<div className=' flex flex-wrap gap-x-[2.5rem] gap-y-[0.5rem] text-[length:--text-xs] text-[--brand] my-[0.8rem] '>
						{project.tech.map((item, i) => (
							<span key={i}>{item}</span>
						))}
					</div>
				</div>
				<div className='relative w-fit '>
					<p className='font-[200]'>
						{project.desc.length > 155
							? project.desc.substring(0, 155) + '...'
							: project.desc}
						<span
							onClick={() => setIsOpen(true)}
							className='cursor-pointer inline-block text-[length:--text-xs] font-[400] text-[--brand] ml-3 hover:underline'
						>
							{' '}
							Learn More {'>'}{' '}
						</span>
					</p>
				</div>
			</div>
			{isOpen ? <Card setIsOpen={setIsOpen} project={project} /> : null}
		</div>
	);
};

export default Projects;
