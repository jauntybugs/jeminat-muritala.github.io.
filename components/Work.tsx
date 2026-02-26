
import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { ExternalLink, ChevronRight, X } from 'lucide-react';
import { CaseStudy } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Featured Work</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-2">Product & Platforms</h2>
          </div>
          <p className="text-zinc-500 max-w-sm">
            Scalable digital products focused on utility, business logic, and exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl glass border border-white/5 aspect-[4/3] flex flex-col justify-end p-8 transition-all hover:border-blue-500/30"
            >
              <div className="absolute inset-0 z-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/10 rounded-full border border-white/5 backdrop-blur-md">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{project.title}</h3>
                <p className="text-zinc-400 line-clamp-2 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
                  View Case Study <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] glass rounded-3xl overflow-hidden flex flex-col z-[110] border border-white/10 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-50"
            >
              <X size={24} />
            </button>
            
            <div className="overflow-y-auto">
              <div className="h-64 sm:h-96 w-full relative">
                <img src={selectedProject.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
                <div className="absolute bottom-12 left-12">
                   <h2 className="text-4xl sm:text-6xl font-black">{selectedProject.title}</h2>
                </div>
              </div>
              
              <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                  <section>
                    <h4 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">The Problem</h4>
                    <p className="text-lg text-zinc-300 leading-relaxed">{selectedProject.problem}</p>
                  </section>
                  <section>
                    <h4 className="text-purple-500 font-bold uppercase text-xs tracking-widest mb-4">UX Approach</h4>
                    <p className="text-lg text-zinc-300 leading-relaxed">{selectedProject.approach}</p>
                  </section>
                  <section>
                    <h4 className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-4">System Design & Implementation</h4>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Focused on scalability and ease of use. Implemented a robust component library 
                      ensuring visual consistency across the entire platform ecosystem.
                    </p>
                  </section>
                </div>
                
                <div className="space-y-8 p-6 rounded-2xl bg-white/5 border border-white/5 h-fit">
                   <div>
                     <h5 className="text-xs uppercase text-zinc-500 font-bold mb-2 tracking-widest">My Role</h5>
                     <p className="text-white font-medium">{selectedProject.role}</p>
                   </div>
                   <div>
                     <h5 className="text-xs uppercase text-zinc-500 font-bold mb-2 tracking-widest">Outcome</h5>
                     <p className="text-white font-medium">{selectedProject.outcome}</p>
                   </div>
                   <button className="w-full py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
                     View Live Prototype <ExternalLink size={18} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
