/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neumorphic: '28px 28px 57px #1e1d29, -28px -28px 57px #282737',
        'neumorphic-sm': '4px 4px 9px #100f16, -4px -4px 9px #36354a',
        'neumorphic-inset':
          'inset 3px 3px 6px #1e1d29, inset -3px -3px 16px #282737',
      },
    },
  },
  plugins: [],
}
