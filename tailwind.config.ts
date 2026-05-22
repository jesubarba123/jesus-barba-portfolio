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
        graphite: "#050509",
        carbon: "#090f18",
        platinum: "#f4f7fb",
        racing: "#3f7cff",
        ignition: "#4a3fb8",
        volt: "#2ee88f",
        electric: "#36bfd4",
        amber: "#a77b44"
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.72)",
        glow: "0 0 34px rgba(54, 191, 212, 0.18), 0 0 58px rgba(63, 124, 255, 0.12)"
      },
      clipPath: {
        angle: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))"
      }
    }
  },
  plugins: []
};

export default config;
