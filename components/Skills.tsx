
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-zinc-500">My toolbelt for building the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i} className={`p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${cat.color} backdrop-blur-sm`}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-white rounded-full"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span key={si} className="px-3 py-1.5 bg-black/40 rounded-full text-xs font-medium text-zinc-300 border border-white/5 hover:border-white/30 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
