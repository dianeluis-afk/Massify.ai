
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
            The Reality Check
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Starting shouldn't feel this heavy.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 italic">"I'll just learn Webflow myself."</h4>
              <p className="text-slate-600 leading-relaxed">
                You spend 40 hours learning a tool instead of talking to customers. You build a technical marvel that nobody wants.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 italic">"I'll hire a dev agency for $15k."</h4>
              <p className="text-slate-600 leading-relaxed">
                They build exactly what you ask for. You lose your budget before you've even launched.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-2xl font-medium text-slate-800 leading-relaxed italic">
              "Most startups don't fail because of bad code. They fail because they built the wrong thing, too early, for too much money."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-200">M</div>
              <div>
                <p className="font-bold text-slate-900">Massify Philosophy</p>
                <p className="text-sm text-slate-500">Marketer-Led Validation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
