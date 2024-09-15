/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1BA6B9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

