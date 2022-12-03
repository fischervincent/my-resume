/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['dark', '[data-mode="dark"]'],
	daisyui: {
		themes: ["light",
			{
				dark: {
					"primary": "#3D8BEB",
					"secondary": "#9FD5FB",
					"accent": "#5BAA97",
					"neutral": "#fff",
					"base-100": "#212122",
					"base-200": "#1C1C1C",
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
