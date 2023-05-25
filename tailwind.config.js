/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors:{
        'pomo-1': '#acc8b4',
        'pomo-1-dark': '#9cb8a4',
        'pomo-1-darker': '#8ca894',
        'pomo-2': '#a46c6c',
        'pomo-3': '#9e3636',
        'pomo-4': '#dca49c',
        'pomo-5': '#625f4e',
        'pomo-6': '#d45338',
        'pomo-3-light': '#a64040'
      }
    },
  },
  plugins: [],
}
