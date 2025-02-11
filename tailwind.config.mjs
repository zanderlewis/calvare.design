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
}