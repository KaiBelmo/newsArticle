module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Adjust as needed
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
};
