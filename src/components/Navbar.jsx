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
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-slate-900 tracking-tight text-lg">indigo</span>
            <span className="font-medium text-sky-600 text-lg">ai</span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/70 text-sky-700 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
          </span>
          <span>Virtual Agents Active 24/7</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-600">
          <button onClick={() => scrollToSection('founders')} className="hover:text-sky-600 transition-colors font-semibold text-slate-800">
            Co-Founders
          </button>
          <button onClick={() => scrollToSection('virtual-agent-demo')} className="hover:text-sky-600 transition-colors">
            Virtual Agent Demo
          </button>
          <button onClick={() => scrollToSection('revenue-calculator')} className="hover:text-sky-600 transition-colors">
            Revenue Loss Calculator
          </button>
          <button onClick={() => scrollToSection('knowledge-base')} className="hover:text-sky-600 transition-colors">
            Knowledge Training
          </button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-sky-600 transition-colors">
            Pricing
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenEnquiryModal} className="btn-blue-primary text-xs py-2 px-4">
            <span>Request Preview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 text-sm">
          <button onClick={() => scrollToSection('founders')} className="block w-full text-left py-2 font-semibold text-sky-700">
            Co-Founders
          </button>
          <button onClick={() => scrollToSection('virtual-agent-demo')} className="block w-full text-left py-2 font-medium text-slate-700">
            Virtual Agent Demo
          </button>
          <button onClick={() => scrollToSection('revenue-calculator')} className="block w-full text-left py-2 font-medium text-slate-700">
            Revenue Loss Calculator
          </button>
          <button onClick={() => scrollToSection('knowledge-base')} className="block w-full text-left py-2 font-medium text-slate-700">
            Knowledge Training
          </button>
          <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 font-medium text-slate-700">
            Pricing
          </button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenEnquiryModal(); }} className="btn-blue-primary w-full justify-center text-xs py-2.5 mt-2">
            Request Preview
          </button>
        </div>
      )}
    </nav>
  );
}
