/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      bungee: ["Bungee Spice", "sans-serif"],
      tektur: ['Tektur', 'sans-serif'],
      dm: ['DM Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'moon': "url('/src/assets/moon.png')",
        'sun': "url('/src/assets/sun.png')",
        'hero': "url('/src/assets/hero.png')",
        'graph': "url('/src/assets/graph1.png')"
      }
    },
  },
  plugins: [],
}

