/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10_custom': '10rem',
        '20_custom': '20rem',
        '2-8rem': '2.8rem',
      },
      colors: {
        customRose: '#DCC3B6',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

