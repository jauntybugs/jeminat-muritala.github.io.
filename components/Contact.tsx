
import React from 'react';
import { Mail, Send, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Let's Build Something <span className="gradient-text">That Matters.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Whether you're a startup looking to launch your first MVP or an enterprise scaling a tech ecosystem, I'm here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:hello@jemienaturals.com" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://wa.me/+2348138673217" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
              <Send size={20} />
              <span>Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
