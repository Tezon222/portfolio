import { Link } from 'react-router-dom';
import { Button, Heading } from '../../common';
import { useDesktopQuery } from '../../hooks';
import downArrow from './images/down-arrow.svg';
import mouse from './images/mouse.svg';

function AboutSection() {
	const isDesktop = useDesktopQuery();

	return (
		<section
			id="About Us"
			className="relative mt-[5rem] flex flex-col items-center justify-center px-[1.6rem] lg:mt-[15rem] lg:flex-row lg:items-start lg:gap-[clamp(4rem,15vw,22rem)]"
		>
			<div className="relative flex flex-col items-center">
				<Heading text={'About Us'} className={'lg:text-[4rem]'} />

				{isDesktop && (
					<>
						<span className="absolute bottom-[0] left-[-1.7rem] inline-block h-[20rem] animate-up-n-down">
							<img src={downArrow} alt="" />
						</span>
						<span className="mt-[4.6rem] inline-flex aspect-square w-[7rem] items-center justify-center rounded-full border-1 border-blue/[0.64]">
							<img className="h-[3.5rem] w-[2.5rem]" src={mouse} alt="" />
						</span>
						<p className="mt-[1.5rem] w-[6.5rem] text-[2.4rem] leading-[2.88rem]">Scroll down</p>
					</>
				)}
			</div>

			<div className="mt-[1.2rem] lg:w-[56rem]">
				<p className="text-center text-[1.4rem] lg:text-end lg:text-[2.4rem] lg:leading-[2.88rem]">
					Tezon is a technology company that specializes in developing cutting-edge software solutions
					for businesses of all sizes, founded in 2022. One of tezon{`'`}s primary areas of expertise
					is in developing custom software solutions that are tailored to the specific needs of
					individual businesses. By working closely with clients to understand their unique
					requirements, Tezon is able to create...
				</p>

				<span className="absolute bottom-[0] z-[5] block h-[15.3rem] rotate-[180deg] bg-[linear-gradient(180deg,hsl(0,0%,100%)27.6%,_hsl(0,0%,100%,0)_100%)] max-md:inset-x-[0] lg:bottom-[2.4rem] lg:w-[56rem]" />

				<Button
					variant={'small'}
					className={'relative z-[10] [margin-inline:auto] lg:mt-[2rem] lg:[margin-inline:auto_0]'}
				>
					<Link to={'about-us'}>{isDesktop ? 'Hire Us' : 'Read More'}</Link>
				</Button>
			</div>
		</section>
	);
}

export default AboutSection;
