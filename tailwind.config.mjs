/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        "inner-custom": "inset 0px 4px 150px 0px rgb(27, 35, 49)",
        "inner-custom2": "inset 0px 4px 50px 150px rgba(81, 103, 80, 0.18)",
        "inner-custom3": "inset 0px 4px 250px 2px rgb(27, 35, 49)",
        "inner-custom4": "inset 0px 0px 120px 2px rgba(100, 96, 131, 0.25)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
