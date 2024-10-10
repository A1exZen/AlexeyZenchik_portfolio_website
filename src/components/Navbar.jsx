import React, { useRef, useState } from 'react'
import { close, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
	const [active, setActive] = useState('Home');
	const [toggle, setToggle] = useState(false);
	
	const toggleModal = () => {
		setToggle(!toggle);
	};
	const handleScroll = () => {
		navLinks.forEach((item) => {
			const section = document.getElementById(item.id);
			if (section) {
				const sectionTop = section.getBoundingClientRect().top;
				
				// Условие для активации элемента навбара
				if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
					setActive(item.title);
				}
			}
		});
	};
	
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	//----------------------------------------------------------------
	return (
		<nav className='hidden bg-[var(--background-dark)] fixed h-[100vh] top-0 left-0 z-30 xs:flex flex-col items-center'>
			<span className='xs:w-[55px] w-[45px] h-[45px] flex justify-center items-center my-[1.8rem] font-bold rounded-[4px] text-[length:var(--text-md)] leading-[1]'>
				AZ<span className='text-[var(--brand)]'>.</span>
			</span>
			<div className='xs:hidden flex justify-center items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[25px] h-[25px] object-contain'
					onClick={toggleModal}
				/>
				<div
					className={`${!toggle ? 'hidden' : 'flex'}
          flex-col mx-2 my-1 rounded-xl sidebar p-6 bg-black left-0 top-[12rem] absolute min-w-[120px] `}
				>
					{navLinks.map((item) => (
						<a
							href={`#${item.id}`}
							key={item.id}
							className={`opacity-50 pb-3 text-[length:var(--text-sm)] font-[200]
				${active === item.title ? 'border-[var(--brand)] opacity-[1]' : ''}
				hover:border-[var(--brand)] hover:opacity-[1]
				`}
							onClick={() => setActive(item.title)}
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
			{navLinks.map((item) => (
				<a
					href={`#${item.id}`}
					key={item.id}
					className={`hidden xs:flex opacity-50 text-[length:var(--text-sm)] font-[200] flex-shrink-0 nav-link h-[100px]
				${active === item.title ? 'border-[var(--brand)] opacity-[1]' : ''}
				hover:border-[var(--brand)] hover:opacity-[1]
				`}
					onClick={() => setActive(item.title)}
					style={{
						writingMode: 'vertical-lr',
					}}
				>
					{item.title}
				</a>
			))}
		</nav>
	);
};

export default Navbar;
