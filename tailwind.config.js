/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'interfont': ['Inter', 'serif'],
            'domine': ['Domine', 'serif'],
        }
    },
  },
  plugins: [],
}