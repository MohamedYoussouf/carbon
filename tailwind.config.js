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
    extend: {
      fontSize: {
        lg: '22.62px',
        xl: '31.99px',
        '2xl': '45.23px',
        '3xl': '63.96px',
        '4xl': '90.44px',
      },
      colors: {
        bg: '#E1E1EA',
        primary: '#1D1B25',
        text: '#201F27'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-100%, 0, 0)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      height: {
        'screen-90': '90vh'
      }
    },
  },
  plugins: [],
}
