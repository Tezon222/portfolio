import { twMerge } from 'tailwind-merge';
import arrowSlant from '../assets/shared/arrow-slant.svg';

const semanticClasses = {
	base: 'flex items-center rounded-sm lg:rounded-md font-medium',

	variants: {
		small: 'p-[0.8rem_2.9rem] text-white bg-green text-[1.2rem] justify-center lg:p-[1rem_4.8rem] lg:text-[1.6rem]',
		large: ' p-[1.2rem_6.3rem] lg:p-[1.6rem_10rem] text-white bg-green justify-center',
		contact: 'p-[1.2rem] lg:p-[1.6rem_4rem] bg-white text-blue box-shadow-btn gap-[1.6rem]',
		form: 'w-full py-[0.9rem] text-[1.2rem] bg-green text-white justify-center',
	},
};

const Button = ({ variant = '', className = '', text, children, hasIcon = false, onClick }) => {
	const BTN_CLASSES = twMerge(semanticClasses.base, semanticClasses.variants[variant], className);

	return (
		<button className={BTN_CLASSES} onClick={onClick}>
			{children ?? text}

			{hasIcon && variant === 'contact' && (
				<img className="aspect-square w-[1.2rem]" src={arrowSlant} alt="" />
			)}
		</button>
	);
};

export default Button;
