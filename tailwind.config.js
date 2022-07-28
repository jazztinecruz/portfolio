/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#1A1820',
        darkViolet: '#6C54A5',
        violet: "#9F5AC5",
        lightViolet:"#AC95DA",
        pitch: "#CC857A"
      },
    },
  },
  plugins: [],
}
