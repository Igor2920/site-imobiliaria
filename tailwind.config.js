/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fonte padrão da aplicação
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Grade personalizada para layout de 70/30 na página de detalhes
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};
