/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10-rem': '10rem',
        '8-rem': '8rem',
        '20-rem': '20rem',
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

