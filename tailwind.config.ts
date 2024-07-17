import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {
      center: true,
      screens: {
        lg:'1140px',
        xl: '1140px',
        '2xl': '1140px'
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        monsterrat: ['Montserrat', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif']
      },
      colors: {
        'vln-red': '#BC1A45',
        'vln-melon': '#FFD369',
        'vln-grey': '#DDDDDD',
        'vln-white': '#F7F7F7',
      },
      spacing: {
        '128': '32rem',
        '1/8': '%12.5',
      },
    },
  },
  plugins: [],
};
export default config;
