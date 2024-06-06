/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
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
        primary: '#171717',
        secondary: '#ffffff',
        tertiary: '#e3e3e3',
        darkText: '#171717',
        greyText: 'b6b6b6',
        lightText: '#FFFFFF',
        offWhite: '#Fcfcfc',
      },
    },
  },
  plugins: [],
};
