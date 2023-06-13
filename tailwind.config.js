/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4f46e9',
				secondary: '#d926a9',
				accent: '#1fb2a6',
				neutral: '#2a323c',
				'base-100': '#111827',
				info: '#3abff8',
				success: '#36d399',
				warning: '#fbbd23',
				error: '#f87272',
				textgray: '#5e5e5e',
			},
		},
	},
	plugins: ['@tailwindcss/forms'],
	
};
