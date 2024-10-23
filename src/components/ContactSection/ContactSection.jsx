import { Link } from 'react-router-dom';
import arrowSlant from '../../assets/shared/arrow-slant.svg';
import { Button, For, Heading } from '../../common';
import { useDesktopQuery } from '../../hooks/useMediaQueries';
import facebook from './images/facebook.svg';
import gmail from './images/gmail.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';

const handles = [
	[facebook, 'Facebook', ''],
	[twitter, 'Twitter', ''],
	[gmail, 'G-mail', ''],
	[instagram, 'Instagram', ''],
	[linkedin, 'Linkedin', ''],
];

function ContactSection({ formHeading, formDescription }) {
	const isDesktop = useDesktopQuery();

	const renderedHandles = (
		<For
			each={handles}
			render={([image, description, link]) => (
				<span key={image} className="inline-flex items-center font-light lg:text-[2.4rem]">
					<img className="h-[2.3rem] w-[2.2rem] lg:h-[4.5rem] lg:w-[4.1rem]" src={image} alt="" />

					<p className="ml-[1rem] mr-auto lg:ml-[2.1rem]">{description}</p>

					<Link to={`/${link}`}>
						<img
							className="aspect-square w-[0.6rem] lg:w-[1.2rem] lg:font-medium"
							src={arrowSlant}
							alt=""
						/>
					</Link>
				</span>
			)}
		/>
	);

	return (
		<section
			id="Contact Us"
			className="relative mt-[8.4rem] flex flex-col items-center gap-[4rem] px-[1.8rem] pt-[2rem] lg:mt-[8.9rem] lg:px-[8.5rem] lg:pt-[9.5rem]"
		>
			{/* Green background */}
			<span className="absolute inset-x-[0] top-[0] z-[-1] block h-[25rem] bg-green lg:h-[52rem]" />

			<div className="flex w-[min(100%,34rem)] flex-col items-center gap-[2.8rem] rounded-sm bg-white p-[5.2rem_1.7rem_2rem] text-center box-shadow-contact lg:w-full lg:flex-row lg:justify-between lg:rounded-md lg:p-[5.2rem_7rem] lg:text-start">
				<div className="flex w-[24.1rem] flex-col  gap-[0.9rem] lg:w-[min(100%,39.4rem)] lg:gap-[1.5rem]">
					<h3 className="text-[1.2rem] font-light lg:text-[2.4rem]">Contact us</h3>

					<Heading text={formHeading ?? 'Get in touch with us'} />

					<p className=" text-[1rem] leading-[1.2rem] lg:text-[1.6rem] lg:leading-[1.92rem]">
						{formDescription ??
							`You can contact us through our website by filling out our contact form on the right,
						or by sending us a dm on any of our social media platforms. We strive to respond to
						all inquiries within 24 hours.`}
					</p>

					{isDesktop && (
						<div className="mt-[2rem] flex w-[13rem] flex-col gap-[2rem] lg:w-[23rem]">
							{renderedHandles}
						</div>
					)}
				</div>

				<form className="flex w-full flex-col gap-[1.2rem] rounded-sm bg-blue p-[2.2rem_2.1rem_2.9rem] text-[1rem] text-blue lg:w-[min(100%,51.2rem)] lg:gap-[2.4rem] lg:rounded-md lg:p-[5.1rem_5.2rem_2rem] lg:text-[1.6rem]">
					<input
						placeholder="Name/Company Name"
						className="min-h-[3.2rem] w-full rounded-sm pl-[2.1rem] placeholder:text-blue lg:min-h-[4.8rem] lg:rounded-md"
						type="text"
					/>
					<input
						placeholder="Email"
						className="min-h-[3.2rem] w-full rounded-sm pl-[2.1rem] placeholder:text-blue lg:min-h-[4.8rem] lg:rounded-md"
						type="email"
					/>
					<input
						placeholder="Phone Number"
						className="min-h-[3.2rem] w-full rounded-sm pl-[2.1rem] placeholder:text-blue lg:min-h-[4.8rem] lg:rounded-md"
						type="tel"
					/>
					<textarea
						placeholder="Your Message"
						className="min-h-[7.2rem] rounded-sm pl-[2.1rem] pt-[1.5rem] placeholder:text-blue focus-visible:outline-green lg:min-h-[14.4rem] lg:rounded-md"
					/>

					<Button
						variant={'form'}
						text={'Send Message'}
						className={'mt-[1rem] lg:mt-[0]'}
						onClick={(e) => e.preventDefault()}
					/>
				</form>
			</div>

			{!isDesktop && <div className="flex w-[13rem] flex-col gap-[2rem]">{renderedHandles}</div>}
		</section>
	);
}

export default ContactSection;
