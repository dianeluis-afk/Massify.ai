
import React from 'react';

const Steps: React.FC = () => {
  const steps = [
    { number: '01', title: 'Clarity Audit', desc: 'We strip your idea down to the features that actually solve your customer’s problem.' },
    { number: '02', title: 'Strategic Build', desc: 'Our team designs and builds your V1 website with a focus on conversion.' },
    { number: '03', title: 'The Launchpad', desc: 'Your product goes live. We integrate analytics so you can see what users do.' },
    { number: '04', title: 'Decide & Scale', desc: 'Based on real data, we help you refine the product or prepare to scale.' }
  ];

  return (
    <section id="steps" className="py-32 px-6 md:px-12 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-blue-100 blur-[80px] rounded-full"></div>
            <div className="bg-white rounded-[40px] p-2 border border-slate-100 shadow-2xl relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2426" 
                alt="Founder Strategy Session" 
                className="rounded-[36px] transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="text-blue-600 font-bold tracking-widest uppercase text-xs">The Roadmap</div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                From "What if?" to "It works."
              </h2>
            </div>
            
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 group">
                  <div className="text-3xl font-black text-slate-200 group-hover:text-blue-600/30 transition-colors pt-1">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm max-w-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
