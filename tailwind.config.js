/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#52ac7b',
        secondary: '#eb5e55',
        background: '#121212',
        surface: '#1e1e1e',
        'surface-light': '#2a2a2a',
      },
      fontFamily: {
        'title': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};