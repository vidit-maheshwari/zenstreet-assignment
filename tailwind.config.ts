import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22BBFF",
        secondary: "#64748b",
        white: "#ffffff",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "1rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
