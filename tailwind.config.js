module.exports = {
  darkMode: 'class',
  content: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["'Red Hat Display'", 'sans-serif'],
        merri: ["'Merriweather'", 'serif'],
      },
      keyframes: {
        movex: {
          '0%': { transform: 'translateX(0)' },
          '12.5%': { transform: 'translateX(5)' },
          '25%': { transform: 'translateX(10)' },
          '37.5%': { transform: 'translateX(5)' },
          '50%': { transform: 'translateX(0px)' },
          '62.5%': { transform: 'translateX(-5)' },
          '75%': { transform: 'translateX(-10px)' },
          '87.5%': { transform: 'translateX(-5)' },
          '100%': { transform: 'translateX(0)' },
        },
        movey: {
          '0%': { transform: 'translateY(0)' },
          '12.5%': { transform: 'translateY(5)' },
          '25%': { transform: 'translateY(10px)' },
          '37.5%': { transform: 'translateY(5px)' },
          '50%': { transform: 'translateY(0px)' },
          '62.5%': { transform: 'translateY(-5)' },
          '75%': { transform: 'translateY(-10px)' },
          '87.5%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'move-x': 'movex 20s linear infinite',
        'move-y': 'movey 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
