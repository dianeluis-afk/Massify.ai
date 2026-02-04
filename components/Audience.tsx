
import React from 'react';

const Audience: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Is Massify for you?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We work best with founders who value speed, clarity, and market-proof over technical perfection.
            </p>
            
            <div className="space-y-6">
              <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 shadow-sm">
                <h4 className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-xs">Ideal for</h4>
                <ul className="space-y-3">
                  {['Non-technical solo founders with an idea', 'SMB owners digitizing a service', 'Founders testing a new vertical', 'Consultants launching a productized service'].map(i => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-400 italic">Not for you if...</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We aren't the right fit for every project. We're honest about where our value ends.
            </p>
            
            <div className="space-y-6">
              <div className="p-8 bg-slate-100/50 rounded-3xl border border-slate-200">
                <h4 className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-xs">Better off elsewhere</h4>
                <ul className="space-y-3">
                  {['Large enterprises with complex compliance', 'DIY builders who enjoy the tech stack', 'People building the next Uber (Version 10)', 'Project with 6-month timelines'].map(i => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <svg className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
