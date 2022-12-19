module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      white: 'rgb(var(--color-white) / <alpha-value>)',
      primary: 'rgb(var(--color-primary)  / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      textPrimary: 'rgb(var(--text-primary) / <alpha-value>)',
      textSecondary: 'rgb(var(--text-secondary) / <alpha-value>)',
    },
    extend: {
      animation: {
        'ping-slow': 'ping 3s ease-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
