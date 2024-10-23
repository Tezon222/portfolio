import { Link } from 'react-router-dom';
import { Button } from '../../common';
import heroImage from './images/hero-image.svg';

function Hero() {
	return (
		<section
			id="Hero"
			className="flex flex-col items-center gap-[5.2rem] p-[6.2rem_1.6rem_1rem] lg:flex-row lg:justify-between lg:p-[9.6rem_clamp(4rem,8vw,12rem)_0]"
		>
			<div className="w-[32.8rem] text-center lg:w-[50.7rem] lg:text-start">
				<h1 className="text-[1.4rem] font-light lg:text-[3.2rem]">TEZON -A tech team.</h1>
				<h2 className="mt-[2.4rem] text-[4.8rem] font-medium leading-[5.7rem] lg:text-[6.4rem]">
					Unleashing Innovation:
				</h2>

				<div className="mt-[2.4rem] text-[2.4rem] leading-[2.88rem] lg:text-[3.4rem] lg:leading-[4.2rem]">
					<p>
						Discover our <span className="text-green">Tech</span>
					</p>
					<p>
						Solutions and <span className="text-green">Services</span>
					</p>
				</div>

				<div className="mt-[3.9rem] flex items-center gap-[1rem] whitespace-nowrap lg:gap-[1.9rem]">
					<Button variant={'large'} text={'Hire Us'} />

					<Button hasIcon={true} variant={'contact'}>
						<Link to={'/contact-us'}>Contact Us</Link>
					</Button>
				</div>
			</div>

			<div className="relative flex h-[19.7rem] w-[29.8rem] items-center justify-center lg:h-[40.7rem] lg:w-[61.2rem]">
				<span className="absolute bottom-[3.2rem] left-[1.2rem] z-[-1] block h-[17.8rem] w-[29.8rem] bg-green lg:bottom-[6rem] lg:left-[1.5rem] lg:h-[81.5%] lg:w-[min(100%,59rem)] xl:h-[89%]" />

				<img
					// eslint-disable-next-line react/no-unknown-property
					fetchpriority="high"
					className="h-full rounded-sm object-cover"
					src={heroImage}
					alt=""
				/>

				<span className="absolute right-[1.2rem] top-[3.2rem] z-[-1] block h-[17.8rem] w-[29.8rem] bg-blue lg:right-[1.45rem] lg:top-[6rem] lg:h-[81.5%] lg:w-[min(100%,59rem)] xl:h-[89%]" />
			</div>
		</section>
	);
}
export default Hero;
