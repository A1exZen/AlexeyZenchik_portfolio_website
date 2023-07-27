import {
	Navbar,
	Main,
	Header,
	About,
	Projects,
	Experience,
	Contact,
} from './components';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const App = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div className='bg-[var(--background)] font-poppins text-[var(--text)] relative overflow-hidden w-full'>
			<div className='w-full h-[100vh] absolute z-1 top-0 left-0'>
				<Particles
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					style={{
						height: '100%',
						width: '100%',
						position: 'absolute',
					}}
					options={{
						fullScreen: {
							enable: false,
							zIndex: 1,
						},
						background: {
							color: 'hsla(0, 0%, 7%, 0.25)',
							position: '50% 50%',
							repeat: 'no-repeat',
							size: 'cover',
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onHover: {
									enable: true,
									mode: 'repulse',
								},
								resize: false,
							},
						},
						particles: {
							color: {
								value: '#ffffff',
							},
							links: {
								color: '#ffffff',
								distance: 150,
								enable: true,
								opacity: 0.3,
								width: 0.5,
							},
							collisions: {
								enable: false,
							},
							move: {
								direction: 'none',
								enable: true,
								outModes: {
									default: 'bounce',
								},
								random: true,
								speed: 1.5,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 1000,
								},
								value: 80,
							},
							opacity: {
								value: 0.3,
							},
							shape: {
								type: 'circle',
							},
							size: {
								value: { min: 0.1, max: 3 },
							},
						},
						detectRetina: true,
					}}
				/>
			</div>
			<Navbar />
			<Header />
			<Main />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
};

export default App;
