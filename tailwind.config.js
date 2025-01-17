/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#272343',
        gray: '#9A9CAA',
        secondary: '#007580',
        gray2: '#636270',
        gray3: '#E1E3E5',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '2md': "960px",
        phones: '390px',
      },
      spacing: {
        '300': '300px',
        '0.2': '0.05rem',
      },
    },
  },
  plugins: [],
}