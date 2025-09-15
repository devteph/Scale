/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      screens: {
        'wide': '65rem',
      },
      spacing: {
        '3.7': '0.938rem',
        '7.5': '1.875rem',
        '13': '3.125rem',
      },
      fontSize: {
        icon:['1.5rem', '1.5rem'],
        '12':['0.75rem', '1.5rem'],
        '13':['0.813rem', '1.25rem'],
        '14':['0.875rem', '1.5rem'],
        '16':['1rem', '1.5rem'],
        '18':['1.125rem', '1.5rem'],
        '24':['1.5rem', '1.875rem'],
        '30':['1.875rem', '2.5rem'],
        '40':['2.5rem', '3.125rem'],
        '50':['3.125rem', '3.75rem'],
        '80':['5rem', '5.625rem']
      },
      colors: {
        'primary': '#0E0E0E',
        'secondary': '#AAA',
        'borders' : '#EEE',
        'alert' : '#F01C00',
        'argent' : '#888'
      }
    },
  },
  plugins: [],
};
