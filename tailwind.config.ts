import type { Config } from "tailwindcss";

const config: Config = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;
