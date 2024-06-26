/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        101: '1.01'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      transitionDuration: {
        400: '400ms'
      },
      transitionDelay: {
        400: '400ms'
      }
    }
  },
  plugins: []
}
