import lineClamp from "@tailwindcss/line-clamp"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
}
