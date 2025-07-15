/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // These paths are crucial for Tailwind to scan your files for classes
    "./app/**/*.{js,ts,jsx,tsx,mdx}",         // Next.js App Router files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",       // If you use Pages Router (less common with --app)
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // For components in root 'components' folder if any
    "./src/**/*.{js,ts,jsx,tsx,mdx}",         // For components/files within the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Sets Inter as the default sans-serif font
      },
    },
  },
  plugins: [],
};

