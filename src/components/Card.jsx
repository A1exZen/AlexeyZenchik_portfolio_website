import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useState } from 'react';

const Card = ({ setIsOpen, project }) => {
	const { title, tech, desc, desc2, live, github, images } = project;

	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const variants = {
		initial: (direction) => {
			return { x: direction > 0 ? 200 : -200, opacity: 0 };
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: 'ease-in',
			// transition:{
			// 	x: {type: 'spring', stiffness: 300, damping: 20},
			// 	opacity: {duration: 0.2},
			// }
		},
		exit: (direction) => {
			return {
				x: direction > 0 ? -200 : 200,
				opacity: 0,
				transition: 'ease-in',
				//  transition:{
				// x: {type: 'spring', stiffness: 300, damping: 20},
				// opacity: {duration: 0.1},
				// }
			};
		},
	};
	const nextStep = () => {
		setDirection(1);
		if (index === images.length - 1) {
			setIndex(0);
			return;
		}
		setIndex(index + 1);
	};
	const prevStep = () => {
		setDirection(-1);
		if (index === 0) {
			setIndex(images.length - 1);
			return;
		}
		setIndex(index - 1);
	};

	return (
		<div
			onClick={() => {
				setIsOpen(false);
			}}
			id='projectCard'
			className='overflow-y-scroll fixed top-0 left-0 right-0 z-[100] h-[100vh] bg-[--bg-opaque] backdrop-blur-[12px] flex justify-center items-center'
		>
			<button
				type='button'
				onClick={() => setIsOpen(false)}
				className='bg-none text-[--text] text-[length:--text-md] absolute top-[1.2rem] right-[1.2rem] cursor-pointer'
			>
				<svg
					stroke='none'
					fill='currentColor'
					viewBox='0 0 24 24'
					height='2em'
					width='2em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path fill='none' d='M0 0h24v24H0z'></path>
					<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
				</svg>
			</button>
			<motion.div
				variants={fadeIn('up', '', 0, 0.4)}
				initial='hidden'
				animate='show'
				className='py-[8rem] absolute top-0 w-full flex justify-center'
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
					className='origin-top-center w-full max-w-[700px] h-fit rounded-[1.2rem] overflow-hidden bg-[--background-light] shadow-[0_5px_15px_rgba(0,0,0,.1)] cursor-auto'
				>
					<div className='relative aspect-video overflow-hidden '>
						<AnimatePresence initial={false} custom={direction}>
							<motion.img
								key={images[index]}
								variants={variants}
								animate='animate'
								initial='initial'
								exit='exit'
								src={images[index]}
								custom={direction}
								className='w-full m-auto h-full object-center'
							/>
						</AnimatePresence>
						<button
							onClick={prevStep}
							className='absolute top-[50%] left-[1rem] rounded-full bg-[var(--bg-opaque)] px-4 py-2 translate-y-[-50%]'
						>
							◀
						</button>
						<button
							onClick={nextStep}
							className='absolute rounded-full px-4 py-2 top-[50%] bg-[var(--bg-opaque)] right-[1rem] translate-y-[-50%]'
						>
							▶
						</button>
					</div>
					<div className='p-[2.4rem]'>
						<h4 className='text-[length:--text-lg]'>{title}</h4>
						<div className='flex flex-wrap gap-[2rem] text-[length:--text-xs] text-[--brand] mt-[0.2rem] mb-[2.4rem]'>
							{tech.map((item, i) => (
								<span key={i}>{item}</span>
							))}
						</div>
						<div className='flex flex-col gap-[1.2rem] text-[length:--text-xs]'>
							<p>{desc2}</p>
						</div>
						<div className='mt-[2.4rem]'>
							<p className='font-[700] text-[--text-md] mb-[0.8rem]'>
								Projects links
							</p>
							<div className='flex justify-between items-center gap-[1.2rem]'>
								<a
									alt='github'
									target='_blank'
									href={github}
									className='flex items-center gap-[0.4rem] text-[length:--text-xs] text-[--brand] hover:underline'
								>
									<svg
										stroke='currentColor'
										fill='currentColor'
										viewBox='0 0 1024 1024'
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
									</svg>
									source code
								</a>
								<a
									alt='live'
									target='_blank'
									href={live}
									className='flex items-center gap-[0.4rem] text-[length:--text-xs] text-[--brand] hover:underline'
								>
									<svg
										stroke='currentColor'
										fill='currentColor'
										viewBox='0 0 1024 1024'
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z'></path>
									</svg>
									live project
								</a>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Card;
