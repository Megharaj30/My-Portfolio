/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable dark mode with the 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Important: This tells Tailwind to scan these files
  ],
  theme: {
    extend: {theme: {
      extend: {
        animation: {
          'fade-in-down': 'fadeInDown 1s ease-out',
        },
        keyframes: {
          fadeInDown: {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    },
  },
  plugins: [],
};
