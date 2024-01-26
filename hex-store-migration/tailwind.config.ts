import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        neumorphic: '28px 28px 57px #1e1d29, -28px -28px 57px #282737',
        'neumorphic-sm': '4px 4px 9px #100f16, -4px -4px 9px #36354a',
        'neumorphic-inset':
          'inset 3px 3px 6px #1e1d29, inset -3px -3px 16px #282737',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
