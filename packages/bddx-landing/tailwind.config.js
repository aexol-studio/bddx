/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bddxBlack: "#111111",
        bddxWhite: "#FFFFFF",
        mdtxOrange0: "#2DB3A1",
        mdtxOrange1: "#2DB3A1",
        mediumGray: "#939BA1",
        darkGray: "#232A2F",
        gray2: "#E6E6E6",
        gray3: "#B5BFCA",
      },
      keyframes: {
        mdtxPulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
      animation: {
        mdtxPulse: "mdtxPulse 4s ease-in-out infinite",
      },
      backgroundImage: {
        basicGradient: "linear-gradient(180deg, #2DB3A1 0%, #4DC0F1 100%)",
        gradientBlue0:
          "linear-gradient(180deg, #418CFD 0%, rgba(92, 47, 235, 0) 100%);",
        gradientBlue1: "linear-gradient(180deg, #3E8178 0%, #133C4E 100%);",
      },
      screens: {
        ssm: "480px",
      },
    },
  },
};
