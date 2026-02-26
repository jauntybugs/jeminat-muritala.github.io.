
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for new opportunities in African Tech
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          I Design & Build Digital Products That <span className="gradient-text">Move Ideas Forward.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Product Designer & Web Developer building scalable platforms, 
          business websites, and tech ecosystems across Africa. 
          Specializing in strategic UX and high-performance development.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="flex items-center gap-2 px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all">
            Work With Me
          </a>
        </div>
      </div>

      {/* Background Decorative Glow for centering focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
