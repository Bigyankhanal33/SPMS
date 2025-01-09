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
      },
      fontSize: {
        'custom-36': '36px',
      },
      fontWeight: {
        bold: '700',
      },
    },
  },
  plugins: [],
}
