import { motion } from 'framer-motion';
import { zoomIn, textVariant, fadeIn } from '../utils/motion';

const Contact = () => {
	return (
		<section id='contact' className='section-wrapper'>
			<div className='max-w-[750px] m-auto rounded-[1.2rem]'>
				<motion.h4
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				variants={zoomIn()}
				className='sm:text-[length:--text-2xl]  text-[length:--text-xl] text-center font-[900]'>
					Contact
					<span className='text-[var(--brand)] text-[length:--text-xl]'>.</span>
				</motion.h4>
				<motion.p
				variants={textVariant()}
				initial='hidden'
				whileInView='show'
				className='text-center font-[200] my-[2.4rem]'>
					Shoot me an email if you want to connect! You can also find me on
					<a
						alt='telegram'
						target='_blank'
						rel='noreferrer'
						href='https://t.me/Lesha_Zenchik'
						className='text-[--brand] underline'
					>
						{' '}
						Telegram
					</a>{' '}
					or
					<a
						alt='linkedin'
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/alexey-zenchik-442118249/'
						className='text-[--brand] underline'
					>
						{' '}
						Linkedin
					</a>{' '}
					if that&apos;s more your speed.
				</motion.p>
				<motion.a
				variants={fadeIn('up', '', 0, 0.15)}
				initial='hidden'
				whileInView='show'
					target='_blank'
					className='flex items-center justify-center gap-[0.8rem] w-fit text-[--text-md] m-auto translate-color duration-200'
				>
					<svg
						stroke='currentColor'
						fill='currentColor'
						viewBox='0 0 1024 1024'
						height='2.4rem'
						width='2.4rem'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z'></path>
					</svg>
					<span>alexey129800@gmail.com</span>
				</motion.a>
			</div>
		</section>
	);
};

export default Contact;
