/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',   // blue
        accent: '#06B6D4',    // cyan
        bgLight: '#F9FAFB',   // gray-50
        textPrimary: '#1F2937', // gray-800
        textSecondary: '#6B7280', // gray-500
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
