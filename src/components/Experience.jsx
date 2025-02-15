import { motion } from 'framer-motion';
import { zoomOut } from '../utils/motion';

const data = [
	{
		companyName:
			'AI-Powered Website Analyzer',
		position: 'Software Developer',
		location: 'Minsk, Belarus',
		description: 'Built an AI-driven web application that analyzes a given website link and generates insights based on its structure, SEO,\n' +
			'performance, and accessibility using OpenAI API.',
		year: '09/2024 - 02/2025',
		tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Node.js', 'Zustand', 'Recharts', 'ExpressJS'],
	},
	{
		companyName:
			'Freelance',
		position: 'Frontend Developer',
		location: 'Minsk, Belarus',
		description: 'Developed E-commerce platforms, dashboards, and custom web apps for clients, focusing on performance and user exp..',
		year: '05/2024 - present',
		tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Zustand', 'shadcn/ui', 'Firebase'],
	},
	{
		companyName:
			'Belarusian State University of Informatics and Radioelectronics',
		position: 'Student',
		location: 'Minsk, Belarus',
		description: '',
		year: '09/2022 - present',
		tech: [],
	},
	{
		companyName: 'IT Overone',
		position: 'Internship',
		location: 'Minsk, Belarus',
		description: '',
		year: '03/2023 - 05/2023',
		tech: ['HTML', 'CSS/SCSS','TailwindCSS', 'JavaScript', 'ReactJS'],
	},
	{
		companyName: 'IT Overone',
		position: 'Frontend Web Developer (Course)',
		location: 'Minsk, Belarus',
		description: '',
		year: '09/2022 - 03/2023',
		tech: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'ReactJS'],
	},
	{
		companyName: 'Computer Academy STEP',
		position: 'Small Computer Academy STEP (Course)',
		location: 'Minsk, Belarus',
		description: '',
		year: '09/2018 - 08/2021',
		tech: ['Adobe Soft', 'Figma', 'UX-UI'],
	},
];

const Experience = () => {
	return (
		<section id='experience' className='section-wrapper'>
			<div className='flex sm:flex-row-reverse items-center justify-between gap-[2.4rem] mb-[2.4rem]'>
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
					className='hidden sm:flex w-[50px] h-[1px] bg-[var(--text)] opacity-30'
				/>
				<motion.h3
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					variants={zoomOut('right', 0.2, 0.4)}
					className='xs:text-[length:--text-xl] text-[5rem] font-[900] text-center '
				>
					Experience
					<span className='text-[var(--brand)] text-[length:--text-xl]'>.</span>
				</motion.h3>
			</div>
			{data.map((item, i) => (
				<div
					key={item}
					className='mb-[2.4rem] px-[1.2rem] pb-[2.4rem] border-b border-[--background-light]'
				>
					<div className='flex items-center justify-between mb-[1.2rem]'>
						<div className='font-[700] text-[--text-md]'>
							{item.companyName}
						</div>
						<div>{item.year}</div>
					</div>
					<div className='flex items-center justify-between mb-[1.2rem]'>
						<div className='text-[--brand] text-[length:--text-md] font-[700]'>
							{item.position}
						</div>
						<div>{item.location}</div>
					</div>
					<div className='mb-[1.8rem] font-[700]'>{item.description}</div>
					<div className='flex flex-wrap gap-[1.2rem]'>
						{item.tech.map((tech, i) => (
							<span
								key={i}
								className='text-[--text-xs] bg-[--background-light] py-[0.3rem] px-[1rem] rounded-full'
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default Experience;
