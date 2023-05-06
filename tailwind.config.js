module.exports = {
	mode: "jit",
	content: [
    	"./src/**/*.{js,jsx,ts,tsx}",
  	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'blue': '#246DA8',
			'white': '#FEFEFE',
			'gray': '#6B6B6B',
			'black': '#101010',
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
		  	},
		  	borderRadius: {
				'4xl': '2rem',
		  	}
		}
	},
  	plugins: [],
}
