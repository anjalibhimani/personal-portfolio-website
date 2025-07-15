import './globals.css'; // Import your global CSS (Tailwind)

// You can define metadata here for SEO
export const metadata = {
  title: 'Anjali Bhimani\'s Portfolio',
  description: 'A personal portfolio website for Anjali Bhimani, showcasing projects and experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
