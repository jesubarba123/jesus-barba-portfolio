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
        ink: "#030303",
        graphite: "#111214",
        carbon: "#1b1c1f",
        platinum: "#f4f7fb",
        racing: "#f23030",
        ignition: "#f7b500",
        volt: "#69ffcf"
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.55)",
        glow: "0 0 42px rgba(242, 48, 48, 0.22)"
      },
      clipPath: {
        angle: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))"
      }
    }
  },
  plugins: []
};

export default config;
