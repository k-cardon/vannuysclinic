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
        pink: {
          50: '#feb5d6',
          100: '#fd54a1',
        },
        blush: {
          50: '#c1a4a8',
          100: '#c0a6aa', 
          150: '#b5979b',
          200: '#ad868c',
          300: '#775355',
        }
      }
    },
  },
  plugins: [],
};
export default config;
