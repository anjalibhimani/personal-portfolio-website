'use client'; // This directive is important for client-side interactivity in App Router

import React from 'react';
// Import your individual section components from src/components
import Header from '../components/Header.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import Skills from '@/components/Skills.js';

// This is your main homepage component
export default function HomePage() { // Renamed from ModernPortfolio for consistency with Next.js page naming
  return (
    // Applied the dark gradient background and white text from your provided code
    <div className="bg-slate-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <Header />
      <main className="pt-20"> {/* Added padding top as per your snippet */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
          <About />
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
          <Skills />
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
