/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-orange': '#FF5722',
        'theme-yellow': '#F78D15',
        'theme-green': '#01D262',
        'theme-green-dark': '#089549',
        'theme-text-primary': '#545454',
        'theme-text-secondary': '#6A6A6A',
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
