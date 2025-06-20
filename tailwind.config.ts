// tailwind.config.ts
import { type Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF", 
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
