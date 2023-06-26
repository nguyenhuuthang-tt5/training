/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  colors: {
    // ...
    'color': {
      'white': '#fff',
      'black': '#000',
    },
    'dark': {
      DEFAULT: 'rgb(29, 28, 28)'
    },
    'tahiti': {
      light: '#67e8f9',
      DEFAULT: '#06b6d4',
      dark: '#0e7490',
    },
    // ...
  },
};
export const plugins = [];

