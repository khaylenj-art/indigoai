import React, { useState, useEffect } from 'react';
import { Bot, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenEnquiryModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Bot className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="font-bold text-slate-900 tracking-tight text-lg">indigo</span>
            <span className="font-semibold text-sky-600 text-lg">.ai</span>
          </div>
        </div>

        {/* Center Status Indicator - Hidden on Mobile, Visible on Tablet/PC */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-sky-800 text-xs font-semibold shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
          </span>
          <span>Virtual Agents Active 24/7</span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button onClick={onOpenEnquiryModal} className="btn-blue-primary text-xs py-2 px-4 shadow-sm">
            <span>Request Preview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </nav>
  );
}
