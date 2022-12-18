module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 8s linear',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
