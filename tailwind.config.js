/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			animation: {
				"slide-up": "slide-up 0.3s ease-out",
				"opacity-up": "opacity-up 0.3s ease-out",
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
