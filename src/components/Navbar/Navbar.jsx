import { Link, NavLink } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import { Button, For, Logo } from '../../common';
import { useDesktopQuery, useNavScroll } from '../../hooks';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About Us', href: '/about-us' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Contact Us', href: '/contact-us' },
];

function Navbar() {
	const isDesktop = useDesktopQuery();
	const { isScrolled, headerRef } = useNavScroll();

	return (
		<header
			ref={headerRef}
			className={twJoin(
				`sticky inset-[0_0_auto_0] z-[200] flex items-center justify-between bg-white py-[0.5rem] pr-[1.6rem] [transition:box-shadow_0.5s_ease] md:py-[0.8rem] md:pr-[5.6rem]`,
				[isScrolled && 'box-shadow-nav']
			)}
		>
			<Logo />

			{/* HAMBURGER */}
			{!isDesktop && (
				<button className="min-h-[1.8rem] w-[1.8rem] bg-hamburger-open bg-no-repeat active:rotate-180 active:[transition:all_0.4s_ease]">
					{/* Background-Img here */}
				</button>
			)}

			{/* Navigation Links */}
			{isDesktop && (
				<>
					<nav className="flex items-center justify-between">
						<ul className="flex w-[50.3rem] items-center font-medium text-blue">
							<For
								each={navLinks}
								render={(link) => (
									<li
										className="border-x-blue first:mr-[4rem] last:ml-[4rem] nth-2:border-x-1 nth-2:px-[4rem] nth-3:border-r-1 nth-3:px-[4rem]"
										key={link.name}
									>
										<NavLink className={'relative'} to={link.href}>
											{({ isActive }) => (
												<>
													{link.name}
													{isActive && (
														<span className="absolute bottom-[-1.2rem] right-[50%] inline-block aspect-square w-[0.7rem] translate-x-[50%] rounded-full bg-green" />
													)}
												</>
											)}
										</NavLink>
									</li>
								)}
							/>
						</ul>
					</nav>

					<Button variant={'small'}>
						<Link to={'/'}>Hire Us</Link>
					</Button>
				</>
			)}
		</header>
	);
}
export default Navbar;
