import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				pink: {
					50: '#feb5d6',
					100: '#fd54a1',
				},
				blush: {
					1: '#A48682',
					50: '#c1a4a8',
					100: '#c0a6aa',
					150: '#b5979b',
					200: '#ad868c',
					300: '#775355',
				},
				brown: {
					1: '#AF897B',
					50: '#884f41',
					100: '#754738',
					200: '#664B49',
					300: '#94655c',
					400: '#49261f',
					500: '#4F2821',
				},
				blue: {
					50: '#658dc3',
					100: '#4f6e99',
					200: '#39506e',
					300: '#233144',
				},
				gray: {
					200: '#1D1C20',
				},
				black: {
					200: '#0D0E11',
				},
				purple: {
					200: '#59525A',
					300: '#535577',
				},
				green: {
					200: '#557753',
				},
			},
		},
	},
	plugins: [],
};
export default config;
