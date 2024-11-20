import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      // Display
      "display-large": [
        "6rem",
        { lineHeight: "7rem", letterSpacing: "-0.094rem" },
      ],
      "display-medium": [
        "3.75rem",
        { lineHeight: "4.5rem", letterSpacing: "-0.031rem" },
      ],
      "display-small": ["3rem", { lineHeight: "3.5rem", letterSpacing: "0" }],

      // Heading
      "heading-1": ["2.5rem", { lineHeight: "3rem", letterSpacing: "0" }],
      "heading-2": ["2rem", { lineHeight: "2.5rem", letterSpacing: "0" }],
      "heading-3": ["1.75rem", { lineHeight: "2.25rem", letterSpacing: "0" }],
      "heading-4": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0" }],
      "heading-5": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0" }],
      "heading-6": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],

      // Label
      "label-lg": [
        "1rem",
        { lineHeight: "1.5rem", letterSpacing: "0", fontWeight: "500" },
      ],
      "label-md": [
        "0.875rem",
        { lineHeight: "1.25rem", letterSpacing: "0", fontWeight: "500" },
      ],
      "label-sm": [
        "0.75rem",
        { lineHeight: "1rem", letterSpacing: "0.031rem", fontWeight: "500" },
      ],

      // Paragraph
      lg: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
      md: ["0.875rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
      sm: ["0.75rem", { lineHeight: "1.25rem", letterSpacing: "0.031rem" }],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: {
          50: "#f5f2fe",
          100: "#ebe5fd",
          200: "#d7cbfb",
          300: "#c3b1f9",
          400: "#af97f6",
          500: "#8964f1",
          600: "#7e4bee",
          700: "#6a32db",
          800: "#5928b8",
          900: "#492296",
          950: "#2b1361",
        },
        secondary: {
          50: "#eefbf8",
          100: "#d5f4ed",
          200: "#aee9dc",
          300: "#7dd7c4",
          400: "#49bca0",
          500: "#3aa68c",
          600: "#2f8571",
          700: "#296b5c",
          800: "#25554b",
          900: "#1f463f",
          950: "#0d2924",
        },
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          950: "var(--gray-950)",
        },
        accent: {
          50: "#f4f7f4",
          100: "#e3e9e3",
          200: "#c7d3c7",
          300: "#9fb39f",
          400: "#728c72",
          500: "#355938",
          600: "#2d4b2f",
          700: "#273e28",
          800: "#223323",
          900: "#1d2b1e",
          950: "#0f170f",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 0 16px var(--background)",
      },
    },
  },
  plugins: [],
};

export default config;
