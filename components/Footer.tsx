
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold tracking-tighter">Jemienaturals © {new Date().getFullYear()}</span>
          <span className="w-px h-4 bg-zinc-800"></span>
          <span className="text-xs text-zinc-500">Built with React & Strategic Design Thinking</span>
        </div>
        
        <div className="flex gap-8 text-xs font-medium text-zinc-500 uppercase tracking-widest">
           <a href="#" className="hover:text-white transition-colors">Back to Top</a>
           <a href="#work" className="hover:text-white transition-colors">Work</a>
           <a href="#services" className="hover:text-white transition-colors">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
