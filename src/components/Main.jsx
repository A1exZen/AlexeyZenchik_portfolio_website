import { motion } from 'framer-motion';
import {
	staggerContainer,
	fadeInChild
} from '../utils/motion';

const Main = () => {
	return (
		<motion.section
			variants={staggerContainer(0.1, 0.1)}
			initial='hidden'
			animate='show'
			viewport={{ once: true, amount: 1 }}
			id='home'
			className={`flex flex-col sm:justify-center section-wrapper sm:h-[100vh] sm:mt-[0]`}
		>
			<div className=''>
				<motion.h1
					variants={fadeInChild('up')}
					className='font-[900] text-[length:var(--text-xl)]  md:text-[length:var(--text-2xl)]  text-white'
				>
					Hey, I&apos;m Alex
					<span className='text-[var(--brand)] text-[length:--text-xl]'>.</span>
				</motion.h1>

				<motion.h2
					variants={fadeInChild('up')}
					className='font-[200] text-[length:--text-lg] text-white mt-[1.5rem]'
				>
					I&apos;m a
					<span className=' text-[length:--text-lg] text-[var(--brand)] font-[700]'>
						{' '}
						Frontend Developer
					</span>
				</motion.h2>
				<motion.div variants={fadeInChild('up')} className=''>
					<p  className=' max-w-[900px] my-[3.5rem] font-[200]'>
						I am passionate about creating interactive and modern user
						interfaces, transforming visual concepts into attractive and
						functional web applications.
						<br />
						<br />I am ready to contribute to your team and bring fresh ideas to
						the development and design process. Together, we can create
						exceptional web applications that are in demand and valued by users.
					</p>
				</motion.div>

				<motion.a
					variants={fadeInChild('left')}
					href='#contact'
					className='py-[1.3rem] px-[2.5rem] border-[var(--brand)] rounded-[4px] text-[length:var(--text-md)] transition-colors duration-200 text-[var(--background-dark)] bg-[var(--brand)] hover:bg-[#0aff9dc5]'
				>
					Contact me
				</motion.a>
			</div>
		</motion.section>
	);
};

export default Main;
