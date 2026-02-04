
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-200 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">M</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">massify<span className="text-blue-600">.ai</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering early-stage founders to look world-class from day one. High-performance landing pages built by marketers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="font-bold text-sm text-slate-900 uppercase tracking-widest">Solutions</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Visualizer</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Basic Web</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Branding</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-sm text-slate-900 uppercase tracking-widest">Support</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-sm text-slate-900 uppercase tracking-widest">Legal</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-200 text-xs text-slate-400 font-medium">
          <p>© 2024 Massify.ai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
