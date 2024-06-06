/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      primary: ['Verona', 'sans-serif'],
      secondary: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        '-2xl': { max: '1600px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '-xsm': { max: '475px' },
        '-2xsm': { max: '414px' },
        '-3xsm': { max: '390px' },
        '-4xsm': { max: '375px' },
        '@pixel5': { min: '393px', max: '393px' },
        '@galaxyS8': { min: '360px', max: '360px' },
        '@md': { min: '640px', max: '767px' },
        '@lg': { min: '768px', max: '1023px' },
        '@xl': { min: '1024px', max: '1279px' },
        '@2xl': { min: '1280px', max: '1600px' },
      },
      colors: {
        primary: '#EE763A',
        secondary: '#41454E',
        tertiary: '#171B23',
        greyLight: '#d8d8d8',
        darkText: '#171B23',
        lightText: '#FFFFFF',
        checkbox: '#d8d8d8',
        offWhite: '#FAF9F8',
      },
    },
  },
  plugins: [],
};
