/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	safelist: [
		"from-red-200",
		"from-yellow-200",
		"from-blue-200",
		"from-purple-200",
	],
	plugins: [],
};
