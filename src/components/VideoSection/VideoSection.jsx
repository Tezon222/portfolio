import playIcon from './images/play-icon.svg';

function VideoSection() {
	return (
		<section
			id="Video Section"
			className="relative mt-[6.8rem] flex w-full flex-col items-center px-[1.6rem] pt-[1.9rem] lg:mt-[12.2rem] lg:px-[clamp(9rem,11vw,18rem)] lg:pt-[7.3rem]"
		>
			<span className="absolute inset-x-[0] top-[0] z-[-1] block h-[25rem] bg-blue lg:h-[52rem]" />

			<div className="flex w-[min(32.6rem,100%)] justify-between lg:w-full">
				<p className="w-[14ch] text-[1.4rem] leading-[1.68rem] text-white lg:w-[45rem] lg:text-[3.1rem] lg:leading-[3.84rem]">
					Designing For Tomorrow’s Success Today
				</p>
				<p className="w-[22ch] text-end text-[1rem] leading-[1.2rem] text-white/[0.64] lg:w-[25rem] lg:text-[1.6rem] lg:leading-[1.92rem]">
					Design that speaks volumes, creating and helping brands to stand out with purpose.
				</p>
			</div>

			<div className="mt-[2.5rem] flex min-h-[19.6rem] w-[min(100%,32.8rem)] items-center justify-center rounded-sm bg-placeholder-mobile bg-cover bg-no-repeat lg:mt-[4.2rem] lg:min-h-[40rem] lg:w-full lg:rounded-md lg:bg-placeholder-desktop">
				<span className="pulse relative inline-block aspect-square w-[10rem] cursor-pointer select-none [transition:transform_0.25s_ease-out] active:scale-[1.1] lg:w-[15rem]">
					<img className="h-full" src={playIcon} alt="" />
				</span>
			</div>
		</section>
	);
}

export default VideoSection;
