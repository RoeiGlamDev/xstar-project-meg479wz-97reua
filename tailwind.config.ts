import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA500', // Light Orange
          DEFAULT: '#FF8C00', // Dark Orange
          dark: '#FF4500', // Orange Red
        },
        white: {
          DEFAULT: '#FFFFFF', // Pure White
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        zoomIn: 'zoomIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
});