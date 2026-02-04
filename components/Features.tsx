
import React from 'react';

const FeatureCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-100/50">
    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-slate-50/50">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-20">
        <div className="flex-1 space-y-6">
          <div className="text-blue-600 font-bold tracking-widest uppercase text-xs">The Massify Way</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Focus on the offer, <br/>not the tech stack.</h2>
        </div>
        <p className="flex-1 text-slate-600 text-lg leading-relaxed lg:max-w-md">
          We aren't a dev shop. We are a partner that helps you find clarity through execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          title="Marketer-Led Design"
          desc="We don't just build sites; we build landing pages that convert visitors into leads. Every pixel is strategic."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        />
        <FeatureCard 
          title="Done-For-You (Truly)"
          desc="Zero learning curve. No need to watch tutorials. You focus on sales; we handle the technical infrastructure."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>}
        />
        <FeatureCard 
          title="Continuity Without Lock-in"
          desc="If your idea scales, we help you prepare for a full engineering hand-off. You own everything."
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
        />
      </div>

      <div className="mt-20 border-t border-slate-200 pt-20">
        <h4 className="text-2xl font-bold mb-10 text-slate-900">What we build for you:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['Interactive Prototypes', 'Marketplace MVPs', 'SaaS V1 Websites', 'High-Conv Landing Pages'].map(item => (
            <div key={item} className="flex items-center gap-3 py-4 px-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-sm font-semibold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
