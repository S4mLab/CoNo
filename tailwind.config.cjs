module.exports = {
	important: true,
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')]
};
