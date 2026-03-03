import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "variable-collection-dark": "var(--variable-collection-dark)",
        "variable-collection-light": "var(--variable-collection-light)",
        "variable-collection-medium": "var(--variable-collection-medium)",
        "variable-collection-medium-light":
            "var(--variable-collection-medium-light)",
        "variable-collection-soft": "var(--variable-collection-soft)",
        "variable-collection-white": "var(--variable-collection-white)",
      },
      fontFamily: {
        "text-button": "var(--text-button-font-family)",
        "text-h1": "var(--text-h1-font-family)",
        "text-h1-mobile": "var(--text-h1-mobile-font-family)",
        "text-h2": "var(--text-h2-font-family)",
        "text-h3": "var(--text-h3-font-family)",
        "text-h3-light": "var(--text-h3-light-font-family)",
        "text-input": "var(--text-input-font-family)",
        "text-paragraph": "var(--text-paragraph-font-family)",
        "text-subtitle": "var(--text-subtitle-font-family)",
        "text-tiny": "var(--text-tiny-font-family)",
        primary: {
          DEFAULT: "#1B1B1B",
          light: "#2D2D2D",
        },
        accent: {
          DEFAULT: "#00FF00",
          dark: "#00CC00",
        },
        neutral: {
          white: "#FFFFFF",
          light: "#F5F5F5",
          gray: "#E0E0E0",
          dark: "#333333",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};

export default config
