import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
        neumorphic:
          '28px 28px 57px rgba(2, 1, 9, 0.4), -28px -28px 57px rgba(30, 14, 88, 0.6)',
        'neumorphic-sm': '4px 4px 9px #0C001A, -4px -4px 9px #2A0057',
        'neumorphic-inset':
          'inset 3px 3px 6px #1e1d29, inset -3px -3px 16px #282737',
      },
      textColor: {
        primary: '#7720D1',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#0D0830',
            primary: '#7720D1',
            divider: '#8C53E4',
          },
          layout: {
            boxShadow: {
              large:
                '28px 28px 57px rgba(2, 1, 9, 0.4), -28px -28px 57px rgba(30, 14, 88, 0.6)',
            },
          },
        },
      },
    }),
  ],
}
export default config
