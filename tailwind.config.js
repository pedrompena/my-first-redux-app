const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        "special-gray":' #F5F0F0',
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
}