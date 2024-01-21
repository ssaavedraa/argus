/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neumorphic: '28px 28px 57px #1e1d29, -28px -28px 57px #282737',
      },
    },
  },
  plugins: [],
}
