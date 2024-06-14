import {animations, components, palettes, rounded, shade } from '@tailus/themer';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@tailus/themer/dist/**/*.{js,ts}'],
  theme: {
    extend: {
      colors : palettes.trust,
      fontFamily: {
        sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
      },
    }
  },
  plugins: [
    animations,
    components,
    rounded,
    shade,
  ]
};
