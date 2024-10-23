import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { logo, logoDesktop } from '../assets/brand';

const Logo = ({ className }) => {
	return (
		<Link className={twMerge(`block h-[8.8rem] w-[15.6rem] lg:w-[24.7rem]`, className ?? '')} to={'/'}>
			<picture>
				<source media="(min-width: 1000px)" srcSet={logoDesktop} />
				<img className="h-full object-cover" src={logo} alt="" />
			</picture>
		</Link>
	);
};

export default Logo;
