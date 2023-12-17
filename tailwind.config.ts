import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'chestnut': '#954535',
        'chestnut-brown': '#5B2516',
        'sorrell-brown': '#99775C',
        'sorrell-darker': '#735945',
        'brown-rose': '#8D736C',
        'narvik': '#EAE7DD',
        'button': '#5C9977',
        'button-dark': '#497A5F',
        'button-hover': '#538A6B',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        emerl: ['var(--font-emerland)'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            fontFamily: 'Inter',
            '--tw-prose-headings': {
              color: 'white',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}
export default config
