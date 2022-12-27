module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease-in-out infinite',
        wheel: 'wheel 3s ease-in-out infinite',
        'ping-slow': 'ping 3s ease-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        wheel: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            top: '2.4rem',
          },
        },
      },
      backgroundImage: {
        'hero-banner': "url('/img/banner-2.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
