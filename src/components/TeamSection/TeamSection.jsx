import { For, Heading } from '../../common';
import { useHorizontalScroll } from '../../hooks';
import Charles from './images/Charles.svg';
import Jeff from './images/Jeff.svg';
import Max from './images/Max.svg';
import arrowRight from './images/arrowRight.svg';

const teamList = [
	{ name: 'Maxmillian', image: Max, occupation: 'Backend Engineer.' },
	{ name: 'Charles-Mary', image: Charles, occupation: 'Content/Copy writer.' },
	{ name: 'Jeffery', image: Jeff, occupation: 'UI/UX Designer.' },
	{ name: 'JohnPaul', image: Charles, occupation: 'Full stack/Project manager.' },
];

const TeamSection = () => {
	const { slideContainerRef, btnElements, handleNextSlide, handlePrevSlide } = useHorizontalScroll();

	return (
		<section
			id="Our Team"
			className="relative mt-[5.6rem] flex flex-col items-center justify-center gap-[2.6rem] lg:mt-[7.1rem] lg:gap-[4.5rem]"
		>
			<Heading className={'text-center'} text={'Our Team'} />

			<button
				ref={(elem) => (btnElements.nextBtn = elem)}
				className="absolute right-[2rem] z-[30] inline-flex aspect-square w-[2.4rem] items-center justify-center rounded-full border-[1px] border-green brightness-[0.8]"
				onClick={handleNextSlide}
			>
				<img className="aspect-square w-[0.9rem]" src={arrowRight} alt="" />
			</button>

			<ul
				ref={slideContainerRef}
				className="flex w-full select-none snap-x snap-mandatory items-start gap-[2.6rem] overflow-x-auto scroll-smooth pl-[5rem] [scrollbar-width:none] lg:gap-[5rem] lg:pl-[7rem] [&::-webkit-scrollbar]:hidden"
			>
				<span className="absolute inset-x-[0] z-[-1] ml-[1.6rem] block h-[8.7rem] rounded-tl-md bg-blue lg:h-[16rem]" />

				<For
					each={teamList}
					render={(member) => (
						<li key={member.name} className="snap-center">
							<div className="relative top-[-0.2rem] h-[26.3rem] w-[18.6rem] lg:h-[50rem] lg:w-[34.6rem]">
								<img className="h-full" src={member.image} alt="" />
								<span className="absolute bottom-[-1.3rem] right-[0.2rem] inline-block h-[1.3rem] w-[8.8rem] bg-green lg:bottom-[-2.3rem] lg:right-[0rem] lg:h-[2.4rem] lg:w-[16.7rem] lg:rounded-br-md" />
							</div>

							<div className="mt-[3rem]">
								<h4 className="lg:text-[2.4rem]">{member.name}</h4>
								<p className="text-[1.2rem] font-light leading-[1.4rem] lg:text-[1.6rem] lg:leading-[1.92rem]">
									{member.occupation}
								</p>
							</div>
						</li>
					)}
				/>
			</ul>

			<button
				ref={(elem) => (btnElements.prevBtn = elem)}
				className="absolute left-[2rem] z-[30] inline-flex aspect-square w-[2.4rem] items-center justify-center rounded-full border-[1px] border-green brightness-[0.8]"
				onClick={handlePrevSlide}
			>
				<img className="aspect-square w-[0.9rem] rotate-180" src={arrowRight} alt="" />
			</button>
		</section>
	);
};
export default TeamSection;
