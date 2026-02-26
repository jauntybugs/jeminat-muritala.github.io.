
import React from 'react';
import { CLIENT_WORK } from '../constants';
import { ExternalLink } from 'lucide-react';

const ClientGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">Partnerships</span>
          <h2 className="text-4xl font-bold tracking-tighter mt-2">Selected Client Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_WORK.map((client, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl glass p-1 border border-white/5 hover:border-white/20 transition-all">
              <div className="aspect-video rounded-xl overflow-hidden relative">
                <img src={client.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <button className="p-3 bg-white text-black rounded-full scale-50 group-hover:scale-100 transition-all duration-300">
                     <ExternalLink size={20} />
                   </button>
                </div>
              </div>
              <div className="p-5 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-lg">{client.name}</h3>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">{client.industry} • {client.type}</p>
                  <p className="text-sm text-zinc-400 italic">"{client.impact}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientGrid;
