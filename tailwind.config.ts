import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
      },
      textColor: {
        primary: '#FEE9FF',
        danger: '#F31260',
        success: '#17C964',
        accent: '#cc69f8',
        'primary-foreground': '#e28efb',
      },
      colors: {
        accent: '#cc69f8',
        hex: {
          50: '#feebff',
          100: '#fbd4ff',
          150: '#f5befe',
          200: '#eea8fd',
          250: '#e493fc',
          300: '#d97efa',
          350: '#cc69f8',
          400: '#bd55f6',
          450: '#ac40f3',
          500: '#9a2df0',
          550: '#8619ec',
          600: '#7214db',
          650: '#5f13c4',
          700: '#4f13ae',
          750: '#401298',
          800: '#331183',
          850: '#270f6e',
          900: '#1d0d59',
          950: '#140b44',
          1000: '#0d0830',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
