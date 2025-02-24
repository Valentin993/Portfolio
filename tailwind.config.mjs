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
        "inner-custom": "inset 0px 4px 250px 20px rgba(100, 96, 131, 0.25)",
        "inner-custom2": "inset 0px 4px 50px 150px rgba(81, 103, 80, 0.18)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
