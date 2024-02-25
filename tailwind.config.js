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
      },
    },
  },
  plugins: [],
}

