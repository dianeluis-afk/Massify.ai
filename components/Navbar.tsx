
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50 px-6 md:px-12 py-4 flex justify-between items-center bg-white/80">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
          M
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">massify<span className="text-blue-600">.ai</span></span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#visualizer" className="hover:text-blue-600 transition-colors">Visualizer</a>
        <a href="#features" className="hover:text-blue-600 transition-colors">Services</a>
        <a href="#steps" className="hover:text-blue-600 transition-colors">Process</a>
        <a href="#pricing" className="px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full transition-all shadow-lg shadow-slate-200">Get Started</a>
      </div>

      <div className="md:hidden">
        <button className="p-2 text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
