/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        customGray: '#e6e7e8',
        customBlack: '#2b2b2b',
        customPurple: '#6b21a8',
        customPurpleLight: '#c084fc',
        customGrayDark: '#d9d9d9',
        customRose: '#c7b3c2',
      },
    },
  },
  plugins: [],
};

