/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '740px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
  },
  plugins: [],
}
