
import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass p-2 border border-white/5 shadow-2xl">
               <img 
                src="https://res.cloudinary.com/dreamsavvy/image/upload/v1771340014/Screenshot_2026-02-17_at_3.53.19_PM_ap1yzv.png" 
                alt="Jeminat Muritala Professional" 
                className="w-full h-full object-cover rounded-[32px]" 
               />
            </div>
            {/* Decorative stats */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border border-white/10 hidden sm:block shadow-xl">
              <div className="text-3xl font-black text-white">5+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Years Experience</div>
            </div>
            <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl border border-white/10 hidden sm:block shadow-xl">
              <div className="text-3xl font-black text-white">20+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Live Products</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Strategic Designer. <br />
            Builder of <span className="text-blue-500">Ecosystems.</span>
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              I am Jeminat Muritala, a Product Designer and Web Developer focused on solving complex problems 
              with clean execution. As the founder of <span className="text-white font-semibold">DesignMe</span>, 
              I'm bridging the gap for beginner designers with AI-powered tools.
            </p>
            <p>
              My work spans from international trade platforms like <span className="text-white font-semibold">Keero</span> 
              to mobile attendance systems for faith-based organizations. I believe in systems thinking 
              and creating products that scale with business needs.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-5 glass rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                <div className="text-blue-500 mb-3"><Target size={28} /></div>
                <div className="text-white font-bold text-lg">Strategy</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Problem-first approach</div>
              </div>
              <div className="p-5 glass rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all">
                <div className="text-purple-500 mb-3"><Lightbulb size={28} /></div>
                <div className="text-white font-bold text-lg">Innovation</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">AI-driven solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
