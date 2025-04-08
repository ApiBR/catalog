/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'br-green': '#009739',
        'br-yellow': '#FFCC29',
        'br-blue': '#002776',
      },
    },
  },
  plugins: [],
};