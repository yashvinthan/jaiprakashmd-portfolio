/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        neon: '#6df3ff',
      },
      fontFamily: {
        techno: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        hologram: '0 0 25px rgba(109, 243, 255, 0.35), inset 0 0 35px rgba(96, 165, 250, 0.25)',
      },
      backgroundImage: {
        dnaGrid: 'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(236, 72, 153, 0.25), transparent 40%)',
      },
    },
  },
  plugins: [],
}
