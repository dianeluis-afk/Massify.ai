
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">The Validation Package</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            One fixed price for a world-class first version.
          </p>
        </div>
        
        <div className="bg-white rounded-[40px] p-12 border border-slate-100 relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
          {/* Badge */}
          <div className="absolute top-10 right-[-35px] px-12 py-2 bg-blue-600 font-bold text-xs uppercase tracking-widest text-white rotate-45 shadow-lg">
            Limited slots
          </div>

          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-blue-600 font-bold text-sm tracking-[0.2em] uppercase">Investment</span>
              <div className="flex items-center justify-center gap-1 text-slate-900">
                <span className="text-4xl font-bold">$</span>
                <span className="text-8xl font-extrabold tracking-tighter">1,495</span>
                <span className="text-slate-500 font-medium text-lg">/project</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-left py-10 border-y border-slate-100">
              {[
                'Single-Page Conversion Layout',
                'Founder Clarity Strategy Session',
                'Visual Identity (Logos & Palette)',
                'AI-Generated Asset Suite',
                'Copywriting Focused on Sales',
                'Responsive & Mobile-First Build',
                'Analytics & Tracking Setup',
                'Hosting & Domain Config'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-slate-700 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 space-y-4">
              <button className="w-full py-6 bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-3xl font-black text-xl shadow-2xl shadow-blue-100">
                Secure Your Start Date
              </button>
              <div className="flex justify-center items-center gap-6">
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> 2 Slots open for March
                </p>
                <p className="text-xs text-slate-400 italic">Everything is yours to keep.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
