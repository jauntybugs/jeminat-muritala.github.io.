
import React, { useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import ClientGrid from './components/ClientGrid';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="bg-gradient-to-b from-transparent via-[#0D0D0D] to-transparent">
          <About />
          <Work />
          <ClientGrid />
          <Services />
          <Skills />
        </div>
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
