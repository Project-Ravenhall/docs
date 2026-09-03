/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#141415',
        surface: {
          DEFAULT: '#1e1e20',
          hover: '#27272a',
        },
        borderbase: '#3f3f46', // zinc-700
      },
      textColor: {
        primary: '#f4f4f5', // zinc-100
        'muted-lighter': '#e4e4e7', // zinc-200
        'muted-light': '#d4d4d8', // zinc-300
        muted: '#a1a1aa', // zinc-400
        'muted-dark': '#71717a', // zinc-500
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false, // Docusaurus has its own preflight / base styles
  },
}
