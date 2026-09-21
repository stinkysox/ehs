/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Centralized Brand Colors
        // Edit these tokens here or in index.css to customize the palette instantly.
        primary: {
          DEFAULT: "#083830",
          light: "#105247",
          dark: "#041f1a",
          subtle: "#e8f5f2",
        },
        accent: {
          DEFAULT: "#f59e0b",
          hover: "#d97706",
          light: "#fef3c7",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
          dark: "#071513",
        },
        industrial: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        }
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(8, 56, 48, 0.06)',
        'soft-md': '0 6px 20px -4px rgba(8, 56, 48, 0.1)',
        'soft-xl': '0 20px 40px -10px rgba(8, 56, 48, 0.16)',
        'accent-glow': '0 0 24px -4px rgba(245, 158, 11, 0.45)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
