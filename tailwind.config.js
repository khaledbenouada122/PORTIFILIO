/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      borderRadius : {
        'round':"50%"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
