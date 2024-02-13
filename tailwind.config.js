/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'synthwave': ['"Roboto"', 'cursive'],
      },
      colors: {
        primary: '#b10dc9', // Adjust color according to your preference
        secondary: '#ff8c00',
      },
    },
  },
  plugins: [require("daisyui")

],
}