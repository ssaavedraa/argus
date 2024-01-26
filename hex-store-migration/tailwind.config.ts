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
        neumorphic: '28px 28px 57px #0C001A, -28px -28px 57px #2A0057',
        'neumorphic-sm': '4px 4px 9px #0C001A, -4px -4px 9px #2A0057',
        'neumorphic-inset':
          'inset 3px 3px 6px #1e1d29, inset -3px -3px 16px #282737',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#1B0038',
          },
        },
      },
    }),
  ],
}
export default config
