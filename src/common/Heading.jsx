import { twMerge } from 'tailwind-merge';

const Heading = ({ children, text, className = '' }) => {
	return (
		<h3 className={twMerge(`text-[2rem] font-medium lg:text-[3.2rem]`, className)}>
			{children ?? text}
		</h3>
	);
};

export default Heading;
