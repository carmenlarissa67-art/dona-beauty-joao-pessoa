/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf6f3',
          100: '#f5ebe6',
          200: '#ecdad2',
          300: '#d9bfb3',
          400: '#b89d90',
          500: '#927a6e',
          600: '#715d54',
          700: '#57473f',
          800: '#3d322d',
          900: '#2a2220',
          950: '#191412',
        },
        ink: { DEFAULT: '#191412', soft: '#2a2220', mute: '#8f7f77' },
        blush: { light: '#f9efec', DEFAULT: '#f2dcd7', dark: '#c99a92' },
        cereja: { DEFAULT: '#9a6b3c', dark: '#7a5230' },
        champagne: { DEFAULT: '#c2a76f', light: '#f3e8d2', dark: '#8c7442' },
        sand: { DEFAULT: '#e9cba3', dark: '#d9b383' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Bodoni Moda"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
      },
    },
  },
  plugins: [],
}
