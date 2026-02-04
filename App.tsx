
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Audience from './components/Audience';
import VisualizerTool from './components/VisualizerTool';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [hasKey, setHasKey] = useState<boolean>(false);

  useEffect(() => {
    const checkKey = async () => {
      if ((window as any).aistudio?.hasSelectedApiKey) {
        const result = await (window as any).aistudio.hasSelectedApiKey();
        setHasKey(result);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if ((window as any).aistudio?.openSelectKey) {
      await (window as any).aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Features />
        
        <section id="visualizer" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {!hasKey ? (
              <div className="glass p-12 rounded-[40px] text-center space-y-8 max-w-3xl mx-auto border-blue-100">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                  Restricted Access
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Unlock the Manifestation Engine</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To generate ultra-high-resolution 4K brand assets for your project, 
                  you'll need to link a billing-enabled Google Cloud project. 
                </p>
                <div className="flex flex-col items-center gap-6 pt-4">
                  <button
                    onClick={handleSelectKey}
                    className="px-10 py-5 bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-3xl font-black text-xl shadow-2xl shadow-blue-200"
                  >
                    Select API Key to Unlock
                  </button>
                  <a 
                    href="https://ai.google.dev/gemini-api/docs/billing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <span>How it works: Gemini API billing</span>
                  </a>
                </div>
              </div>
            ) : (
              <VisualizerTool onResetKey={() => setHasKey(false)} />
            )}
          </div>
        </section>

        <Audience />
        <Steps />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;
