import { motion } from 'framer-motion';
import resume from '../../public/Alexey Zenchik_RESUME.pdf';
const Header = () => {
	//----------------------------------------------------------------
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i) => {
			const delay = 1 + i * 0.5;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
					opacity: { delay, duration: 0.01 },
				},
			};
		},
	};

	const iconVariants = {
		hidden: {
			y: 0,
		},
		hover: {
			fill: 'var(--brand)',
			y: -5,
			transition: {
				duration: 0.4,
				type: 'spring',
			},
		},
	};

	return (
		<header
			style={{ backdropFilter: 'blur(12px)' }}
			className={`z-[20] p-1 xs:pl-[10rem] xs:pr-[5rem] fixed w-full flex justify-between xs:py-6 items-center font-[500] text-[--text-md] bg-[var(--bg-opaque)]`}
		>
			<div className='flex-1 flex gap-[1.6rem] items-center'>
				<a
					alt='LinkedIn'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/alexey-zenchik-442118249/'
					className='opacity-[0.5] hover:opacity-[1] bg-inherit duration-200'
				>
					<motion.svg
						variants={iconVariants}
						initial='hidden'
						whileHover='hover'
						fill='#fff'
						strokeWidth='0'
						viewBox='0 0 1024 1024'
						height='2.4rem'
						width='2.4rem'
						xmlns='http://www.w3.org/2000/svg'
					>
						<motion.path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z'></motion.path>
					</motion.svg>
				</a>
				<a
					alt='github'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/A1exZen'
					className='opacity-[0.5] hover:opacity-[1] bg-inherit duration-200'
				>
					<motion.svg
						variants={iconVariants}
						initial='hidden'
						whileHover='hover'
						fill='#fff'
						strokeWidth='0'
						viewBox='0 0 1024 1024'
						height='2.4rem'
						width='2.4rem'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
					</motion.svg>
				</a>
				<a
					alt='instagram'
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/lesha_zenchik/'
					className='opacity-[0.5] hover:opacity-[1] bg-inherit duration-200'
				>
					<motion.svg
						xmlns='http://www.w3.org/2000/svg'
						height='2.4rem'
						width='2.4rem'
						variants={iconVariants}
						initial='hidden'
						whileHover='hover'
						fill='#fff'
						viewBox='0 0 16 16'
					>
						<path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
					</motion.svg>
				</a>
				<a
					alt='telegram'
					target='_blank'
					rel='noreferrer'
					href='https://t.me/Lesha_Zenchik'
					className='opacity-[0.5] hover:opacity-[1] bg-inherit duration-200'
				>
					<motion.svg
						xmlns='http://www.w3.org/2000/svg'
						height='2.5rem'
						width='2.5rem'
						variants={iconVariants}
						initial='hidden'
						whileHover='hover'
						fill='#fff'
						viewBox='0 0 16 16'
					>
						<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z' />
					</motion.svg>
				</a>
			</div>
			<motion.a
				alt='resume'
				href={resume}
				target='blank'
				whileHover={{
					backgroundColor: 'var(--brand)',
					color: 'black',
				}}
				transition={{
					duration: 0.3,
					type: 'easeInOut',
				}}
				className=' py-[0.7rem] xs:px-[1rem] px-[1rem] border border-[var(--brand)] bg-transparent rounded-sm text-[var(--brand)] text-[length:var(--text-xs)] relative z-20 transition-colors duration-200
			'
			>
				My resume
			</motion.a>
		</header>
	);
};

export default Header;
