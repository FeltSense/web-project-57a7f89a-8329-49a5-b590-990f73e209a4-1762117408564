'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-3 group">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all duration-300 group-hover:scale-105">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent tracking-tight">
            OG's Resto
          </span>
          <span className="text-xs text-slate-500 font-medium tracking-wide -mt-1">
            ORIGINAL FLAVORS
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a 
          href="#home" 
          className="px-4 py-2 text-slate-700 font-medium hover:text-teal-600 transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#services" 
          className="px-4 py-2 text-slate-700 font-medium hover:text-teal-600 transition-colors duration-200 relative group"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#pricing" 
          className="px-4 py-2 text-slate-700 font-medium hover:text-teal-600 transition-colors duration-200 relative group"
        >
          Pricing
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#contact" 
          className="px-4 py-2 text-slate-700 font-medium hover:text-teal-600 transition-colors duration-200 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <button className="px-5 py-2.5 text-slate-700 font-medium hover:text-teal-600 transition-colors duration-200">
          Sign In
        </button>
        <button className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-slate-700 hover:text-teal-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden border-t border-slate-200/60 bg-white/98 backdrop-blur-md">
    <div className="px-4 py-4 space-y-1">
      <a 
        href="#home" 
        className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-all duration-200"
      >
        Home
      </a>
      <a 
        href="#services" 
        className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-all duration-200"
      >
        Services
      </a>
      <a 
        href="#pricing" 
        className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-all duration-200"
      >
        Pricing
      </a>
      <a 
        href="#contact" 
        className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-all duration-200"
      >
        Contact
      </a>
      <div className="pt-4 space-y-2 border-t border-slate-200/60">
        <button className="w-full px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-all duration-200">
          Sign In
        </button>
        <button className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}