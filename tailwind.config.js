/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      navy: {
        700: '#1a365d',
        800: '#153e75',
        900: '#1e3a8a',
      },
    },},
  },
  plugins: [],
};
