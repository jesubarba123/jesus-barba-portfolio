import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        graphite: "#030609",
        carbon: "#071019",
        platinum: "#f3fbff",
        racing: "#6fa4d7",
        ignition: "#263760",
        volt: "#78c6b0",
        electric: "#5fb8c9",
        amber: "#b29564"
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.72)",
        glow: "0 0 28px rgba(95, 184, 201, 0.13), 0 0 48px rgba(111, 164, 215, 0.09)"
      },
      clipPath: {
        angle: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))"
      }
    }
  },
  plugins: []
};

export default config;
