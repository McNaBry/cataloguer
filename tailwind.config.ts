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
        'brown-rose': '#8D736C',
        'narvik': '#EAE7DD',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
export default config
