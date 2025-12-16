/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      colors: {
        // Apple-inspired system grays
        "apple-gray": {
          50: "#F5F5F7",
          100: "#E8E8ED",
          200: "#D2D2D7",
          300: "#AEAEB2",
          400: "#8E8E93",
          500: "#636366",
          600: "#48484A",
          700: "#3A3A3C",
          800: "#2C2C2E",
          900: "#1C1C1E",
        },
        // Semantic colors
        "system-blue": "#007AFF",
        "system-green": "#34C759",
        "system-red": "#FF3B30",
        "system-orange": "#FF9500",
        "system-yellow": "#FFCC00",
        "system-purple": "#AF52DE",
        "system-teal": "#5AC8FA",
        "system-indigo": "#5856D6",
        // Warm Theme Colors (Refined)
        "warm-cream": "#FDFBF7",
        "warm-white": "#F8F9FA",
        "warm-beige": "#F5F0E6",
        "warm-orange": "#FFD8B1",
        "warm-text": "#4A4036",

        // Soft Pastel Palette (Light Mode)
        "soft-pink": "#FFD1D1",
        "baby-blue": "#D1EAFF",

        // Aurora Palette (Dark Mode)
        "dark-base": "#0F172A",
        "muted-purple": "#4C1D95",
        "deep-indigo": "#1E1B4B",
        "off-white": "#E2E8F0",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, -80px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-40px, 40px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        jelly: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.9, 1.1)" },
          "50%": { transform: "scale(1.1, 0.9)" },
          "75%": { transform: "scale(0.95, 1.05)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        blob: "blob 7s infinite",
        jelly: "jelly 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
