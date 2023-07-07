/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"switzer": ["Switzer", "sans-serif"],
				"panchang": ["Panchang", "sans-serif"],
			}
		},
	},
	plugins: [],
}
