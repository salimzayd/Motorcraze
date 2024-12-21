/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 102, 0.8), 0 0 15px rgba(255, 255, 102, 0.6), 0 0 30px rgba(255, 255, 102, 0.4)',
      },
      colors: {
        silver: '#C0C0C0',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
