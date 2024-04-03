/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: 'class',

  daisyui: {
    themes: ["light", "dark", "cupcake",'synthwave'],
    
  },
  theme: {
    extend: { 
     
      fontFamily: {
        'synthwave': ['"Roboto"', 'cursive'],
      },
      colors: {
        light: '#ffffff',
        dark: '#13477d',
      },
    },
  },
  plugins: [require("daisyui")

],
}