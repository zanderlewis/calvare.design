/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        minecraft: '#44B74A',
        soundcloud: '#ff5500',
        scratch: '#4D97FF'
      }
    },
  },
  plugins: [],
  safelist: [
    'from-yellow-600',
    'to-yellow-600/80',
    'hover:to-yellow-600',
    'hover:shadow-yellow-600/20',
    'from-orange-600',
    'to-orange-600/80',
    'hover:to-orange-600',
    'hover:shadow-orange-600/20',
    'from-blue-400',
    'to-blue-400/80',
    'hover:to-blue-400',
    'hover:shadow-blue-400/20',
    'text-blue-400',
    'from-red-600',
    'to-red-600/80',
    'hover:to-red-600',
    'hover:shadow-red-600/20',
    'text-red-600',
  ]
}