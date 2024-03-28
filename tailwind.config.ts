import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          "hero-pattern": "url('/assets/hero_photo.jpg')",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ defaultTheme: "dark" })],
} satisfies Config
