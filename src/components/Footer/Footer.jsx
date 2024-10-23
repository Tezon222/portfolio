import { Link } from 'react-router-dom';
import { Button, Heading, Logo } from '../../common';
import { useDesktopQuery } from '../../hooks/useMediaQueries';

function Footer() {
	const isDesktop = useDesktopQuery();

	return (
		<footer className="mt-[6.4rem] pb-[3rem] lg:mt-[10.6rem]">
			<div className="flex flex-col items-center justify-center gap-[1.2rem] lg:flex-row lg:justify-between lg:bg-blue lg:p-[2rem_10rem]">
				<Heading
					text={'We Should Start a Project'}
					className={
						'flex min-h-[6.4rem] w-full items-center justify-center bg-blue py-[2rem] text-white lg:w-[initial] lg:bg-[initial] lg:py-[0]'
					}
				/>

				<Button
					hasIcon={!isDesktop}
					variant={'contact'}
					className={
						'gap-[1.9rem] p-[1.3rem_6.8rem] text-[1.2rem] font-medium lg:p-[1.3rem_5.6rem] lg:text-[1.6rem]'
					}
				>
					<Link to={'/contact-us'}>Contact Us</Link>
				</Button>
			</div>

			<div className="lg:px[3.5rem] mt-[7.4rem] flex items-center justify-between px-[1.6rem] lg:mt-[5.7rem]">
				<div>
					<Logo className={'ml-[-2rem]'} />

					<p className="text-[1rem] text-blue/[0.64] lg:m-[1rem_0_0.2rem] lg:ml-[6rem] lg:text-[1.6rem]">
						. <span className="ml-[0.3rem]">Send a mail</span>
					</p>

					<a
						href="mailto: tezonteam@gmail.com"
						className="text-[1.4rem] font-light lg:ml-[6rem] lg:text-[3.6rem]"
					>
						tezonteam@gmail.com
					</a>
				</div>

				<div className="flex flex-col gap-[1.6rem] lg:flex-row lg:gap-[16.5rem]">
					<div className="lg:flex lg:flex-col lg:gap-[0.6rem] lg:font-light">
						<h4 className="text-[1.2rem] lg:text-[2.4rem] lg:font-regular">
							<a href="/">Quick Links</a>
						</h4>
						{isDesktop && (
							<>
								<Link to={'/about-us'}> About us </Link>
								<Link to={'/'}> Service </Link>
								<Link to={'/'}> Portfolio </Link>
								<Link to={'/contact-us'}> Contact </Link>
							</>
						)}
					</div>

					<div className="lg:flex lg:flex-col lg:gap-[0.6rem] lg:font-light">
						<h4 className="text-[1.2rem] lg:text-[2.4rem] lg:font-regular">
							<a href="/">Follow Us</a>
						</h4>
						{isDesktop && (
							<>
								<a href="/"> Twitter </a>
								<a href="/"> Instagram </a>
								<a href="/"> Linked-in </a>
								<a href="/"> Facebook </a>
							</>
						)}
					</div>
				</div>
			</div>

			<p className="mt-[5.2rem] text-center text-[1.2rem] font-light lg:mt-[5.8rem] lg:text-[2rem]">
				Copyright* 2022TEZON. All rights reserved.
			</p>
		</footer>
	);
}
export default Footer;
