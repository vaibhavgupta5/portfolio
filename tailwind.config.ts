import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      fadeIn: "fadeIn 0.2s ease-out forwards",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
      fadeIn: {
        "0%": { opacity: "0", transform: "scale(0.8)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
      
    },
    
  },
  plugins: [
    addVariablesForColors,
  ],
} satisfies Config;


function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
