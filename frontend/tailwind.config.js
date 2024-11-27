/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true, 
      },
    },
    container: {
      screens: {
        sm: '600px',
        md: '700px',
        lg: '900px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}