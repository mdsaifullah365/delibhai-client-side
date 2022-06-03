module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00C795",
          secondary: "#13EBB4",
          accent: "#707070",
          neutral: "#D9D9D9",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
