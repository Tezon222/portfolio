/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		spacing: {},

		screens: {
			sm: '480px',
			md: '768px',
			lg: '1000px',
			xl: '1280px',
		},

		borderRadius: {
			sm: '4px',
			md: '8px',
			full: '50%',
		},

		colors: {
			blue: 'hsl(var(--color-blue), <alpha-value>)',
			green: 'hsl(var(--color-green), <alpha-value>)',
			'light-green': 'hsl(var(--color-light-green))',
			white: 'hsl(var(--color-white), <alpha-value>)',
			transparent: 'transparent',
			current: 'currentColor',
		},

		extend: {
			fontFamily: {
				medium: ['"Gilmer Medium"', 'sans-serif'],
				regular: ['"Gilmer Regular"', 'sans-serif'],
				light: ['"Gilmer Light"', 'sans-serif'],
			},

			fontWeight: {
				light: '300',
				regular: '400',
				medium: '600',
			},

			borderWidth: {
				1: '1px',
				2: '2px',
			},

			backgroundImage: {
				'placeholder-mobile': 'url(/src/components/VideoSection/images/video-placeholder-mobile.svg)',

				'placeholder-desktop':
					'url(/src/components/VideoSection/images/video-placeholder-desktop.svg)',

				'hamburger-open': 'url(/src/assets/brand/hamburger.svg)',
			},

			animation: {
				'up-n-down': 'up-n-down 2s ease-in-out infinite',
			},

			keyframes: {
				'up-n-down': {
					'0%, 100%': { transform: 'translateY(-22%)' },
					'50%': { transform: 'translateY(2%)' },
				},
			},
		},
	},

	plugins: [
		plugin(({ matchVariant, matchUtilities }) => {
			matchUtilities(
				{
					'box-shadow': (value) => ({
						boxShadow: value,
					}),
				},

				{
					values: {
						btn: '0 0 6.4rem var(--btn-shadow)',
						nav: '0 0.4rem 6.4rem var(--nav-shadow)',
						contact: '0 0 6.4rem var(--nav-shadow)',
					},
				}
			);

			matchVariant(
				'nth',

				(value) => {
					return `&:nth-child(${value})`;
				},

				{
					values: {
						2: '2',
						3: '3',
					},
				}
			);
		}),
	],
};

export default config;
