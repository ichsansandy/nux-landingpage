/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand-color)',
        background: 'var(--background-color)',
        ntrlPrime: 'var(--neutral-prime-color)',
        ntrlSecond: 'var(--neutral-second-color)',
        ntrlThird: 'var(--neutral-third-color)',
      },
      fontSize: {
        display: '139px',
        h1: '56px',
        p: '18px',
      },
      animation: {
        slide: 'slide 12s linear infinite',
      },
      keyframes: {
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        display: {
          fontSize: '139px',
          fontWeight: '700',
          letterSpacing: '-.025em',
        },
        h1: { fontSize: '56px', fontWeight: '600', letterSpacing: '-.025em' },
        h2: { fontSize: '48px', fontWeight: '600', letterSpacing: '-.025em' },
        h3: { fontSize: '32px', fontWeight: '600' },
        p: { fontSize: '18px', fontWeight: '400' },
        span: { fontSize: '18px', fontWeight: '400' },
        li: { fontSize: '18px', fontWeight: '400' },
        button: { fontSize: '18px', fontWeight: '400' },
      });
    }),
  ],
};
