/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(10, 41, 77, 0.4)',
      },
    },
  },
  plugins: [],
}
