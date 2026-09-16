/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#ffffff',
          subtle: '#f5f5f7',
          card: '#fafafa',
          text: '#1d1d1f',
          muted: '#6e6e73',
          blue: '#0071e3',
          purple: '#6e56cf',
          green: '#34c759',
        }
      },
      fontFamily: {
        apple: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 12px 32px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 24px 60px rgba(0, 0, 0, 0.12)',
        'apple-glow': '0 0 40px rgba(0, 113, 227, 0.25)',
      }
    },
  },
  plugins: [],
}
