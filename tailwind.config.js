/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"red-item": "#FF445D",
				"yellow-item": "#DCAE64",
				"pink-item": "#DF5DEE",
				"purple-item": "#A41AFF",
				"blue-item": "#4482FF",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				"rounded-mplus": ['"M PLUS Rounded 1c"', "sans-serif"],
			},
			animation: {
				"slide-up": "slide-up 0.3s ease-out",
				"opacity-up": "opacity-up 0.3s ease-out",
				"opacity-down": "opacity-down 0.3s ease-out",
			},
			keyframes: {
				"slide-up": {
					"0%": { transform: "translateY(30px)" },
					"100%": { transform: "translateY(0)" },
				},
				"opacity-up": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"opacity-down": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
		},
	},
	safelist: [
		"border-b-red-item",
		"border-b-purple-item",
		"border-b-pink-item",
		"border-b-yellow-item",
		"border-b-blue-item",
	],
	plugins: [],
};
