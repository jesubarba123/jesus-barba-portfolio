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
        racing: "#ff2f92",
        ignition: "#b026ff",
        volt: "#00ff9d",
        electric: "#00e5ff",
        amber: "#ff9f1c"
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.72)",
        glow: "0 0 34px rgba(0, 229, 255, 0.22), 0 0 58px rgba(255, 47, 146, 0.16)"
      },
      clipPath: {
        angle: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))"
      }
    }
  },
  plugins: []
};

export default config;
