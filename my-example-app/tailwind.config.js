/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '740px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
