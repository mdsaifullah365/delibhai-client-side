module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Serif Bengali', serif;",
      },
      boxShadow: {
        '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00C795',
          secondary: '#13EBB4',
          accent: '#707070',
          neutral: '#D9D9D9',
          'base-100': '#ffffff',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('ps-scrollbar-tailwind'),
    require('flowbite/plugin'),
  ],
};
