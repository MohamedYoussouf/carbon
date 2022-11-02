/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1156px',
      },
    },
    fontSize: {
      base: '16px',
      '4xl': '90.44px',
    },
    extend: {
      colors: {
        bg: '#CCCCDB',
        primary: '#2A2645'
      }
    },
  },
  plugins: [],
}
