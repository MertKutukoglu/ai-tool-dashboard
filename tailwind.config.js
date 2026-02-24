/** @type {import('tailwindcss').Config} */
const designSeedPreset = require('./tailwind.preset.js');

module.exports = {
  presets: [designSeedPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
