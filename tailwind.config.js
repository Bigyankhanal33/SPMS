/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      fontSize: {
        'custom-36': '36px',
        'custom-28':'28px',
        'custom-18':'18px',
        'custom-btn':'20px',

      },
      fontWeight: {
        bold: '700',
        medium:'500',
        regular:'400'

      },
      colors: {
        black: '#030303',  
        secondary: '#193960',  
        primary: '#2475A5',  
        white: '#FEFEFE',  
        background: '#EDF2F6',  
        hover: '#3279A5', 
        fade_white: '#FBFBFB',   
      },
    },
  },
  plugins: [],
}
