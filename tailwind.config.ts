import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // **************** DARK THEME ******************
        'dark': "#222222",
        'medium': "#293245",
        'primary-dark': '#292B32',
        'top-linear-dark': '#18282A',
        'bottom-linear-dark': '#221A2C',
        'ads-bg-dark': '#006555',
        'bg-card-dark': '#3B3E47',
        'bg-card-desc-dark': '#292B32',
        'text-card-dark': '#DFDFDF',
        'card-dots-dark': '#818A97',

        // **************** LIGHT THEME ******************
        'primary-light': '#F7F7F8',
        'top-linear-light': '#F9F8FF',
        'bottom-linear-light': '#F3F9FF',
        'ads-bg-light': '#FFFFFF',
        'bg-card-light': '#FFFFFF',
        'bg-card-desc-light': '#F7F7F8',
        'card-light-desc': '#525965',
        'card-dots-light': '#A9ACB2',
        'ads-title': "#222D3A",

        'color-white': '#ffffff',
        'color-black': '#000000',
        'bg-button': '#2C9CF0',

      }
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;
