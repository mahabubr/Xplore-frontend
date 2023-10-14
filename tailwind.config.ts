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
        // Define your custom color palette here
        primary: "#003366", // Deep Blue
        accent: "#FFD700", // Golden Sand
        nature: "#228B22", // Forest Green
        sunset: "#FF6600", // Sunset Orange
        passion: "#DC143C", // Crimson Red
        neutral: "#808080", // Slate Gray
        water: "#40E0D0", // Turquoise Blue
        sky: "#87CEEB", // Sky Blue
        warm: "#F5DEB3", // Sandy Beige
        elegant: "#f9f9f9", // Lavender
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
  // Define responsive breakpoints
  // Example: sm, md, lg, xl, and custom
  // You can customize the values based on your needs
  variants: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
};

export default config;
