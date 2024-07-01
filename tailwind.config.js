/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
      },
      backgroundSize: {
        'size-50': '250%',
      },
      backgroundPosition: {
        'top-4': 'center 1%',
        'right-3': 'right 0.75rem center',
        'bottom-1/3': 'center bottom 33%',
        'center-c': 'left 82.5% center',
      },
    },
  },
  plugins: [],
}