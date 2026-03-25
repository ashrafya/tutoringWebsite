/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          600: '#1E40AF',
          700: '#1E3A8A',
          800: '#1e2e6b',
          900: '#0F172A',
        },
        brand: {
          orange:      '#F97316',
          'orange-hover': '#EA6C00',
          gold:        '#B45309',
          'gold-light': '#FEF3C7',
        },
      },
      fontFamily: {
        heading: ['"Crimson Pro"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
