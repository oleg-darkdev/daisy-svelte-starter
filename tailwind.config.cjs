const { fontFamily, screens } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
		},
		colors: {
			black: colors.black,
			white: colors.white,
			// gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			lime: colors.lime,

			darkBlue: '#03354a',
			// yellow: colors.yellow,
			yellowH: '#fff388',
			yellowB: '#fff8b9',
			grey: '#f4f4f4',
			yellow: '#ffef5a',
			pink: '#ff96bc',
			purple: '#d2a4ff',
			blue: '#54f5ff',
			turquoise: '#8cffcf',
			green: '#99ff96',
			greenB: '#c6fab4',
			blueB: '#a5b4fb',
			primary: '#54ffd6'
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
