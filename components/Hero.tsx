
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 -z-10 w-[400px] h-[400px] bg-indigo-50/40 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-widest mb-10">
          Built for non-technical founders & SMBs
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-5xl leading-[1.1] text-slate-900">
          Stop learning tools. <br/>
          <span className="gradient-text">Start validating your idea.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-light">
          Most products fail because they were built too early and too expensively. 
          Massify builds your V1 from a marketer’s perspective—focused on clarity and conversion.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a href="#pricing" className="px-10 py-5 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1">
            Build My First Version
          </a>
          <a href="#visualizer" className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-50 rounded-2xl font-bold text-lg transition-all border border-slate-200 shadow-sm">
            See Your Idea in 4K
          </a>
        </div>

        <div className="mt-20 w-full relative max-w-5xl">
            <div className="glass rounded-3xl p-3 border-white shadow-2xl overflow-hidden float-animation">
                <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[16/8] flex items-center justify-center relative group shadow-inner">
                  <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                      alt="Strategic Build" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-left">
                    <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1">Success Story</p>
                    <p className="text-xl font-bold text-slate-900">Fintech MVP: $20k ARR in 30 Days</p>
                  </div>
                </div>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 filter">
              {['Techstars', 'Y-Combinator Founders', 'Local SMBs', 'Bootstrap Heroes'].map(tag => (
                <span key={tag} className="text-sm font-bold uppercase tracking-widest text-slate-400">{tag}</span>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
