import React from 'react';
import { ArrowRight, Bot, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenEnquiryModal, onScrollToDemo }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-sky-50/70 via-slate-50/30 to-white overflow-hidden">
      
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-200/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-6 border border-sky-200/60">
          <Zap className="w-3.5 h-3.5 text-sky-600" />
          <span>Autonomous Virtual Agents for Business Websites</span>
        </div>

        {/* New Punchy Headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
          We build modern websites with{' '}
          <span className="animate-text-shimmer">autonomous Virtual Agents</span>
          {' '}that capture every lead instantly.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Engage website visitors in 0.4 seconds, answer custom business enquiries 24/7, and send qualified leads straight to your email inbox.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button 
            onClick={onScrollToDemo}
            className="btn-blue-primary text-sm py-3 px-7 shadow-sm"
          >
            <span>Test Virtual Agent</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={onOpenEnquiryModal}
            className="btn-blue-secondary text-sm py-3 px-7"
          >
            <span>Send Enquiry & Website URL</span>
          </button>
        </div>

        {/* Simple 3-Pillar Summary Bar */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Virtual Agents</div>
              <div className="text-[11px] text-slate-500">24/7 Instant Response</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Custom Web Build</div>
              <div className="text-[11px] text-slate-500">High-Converting Layouts</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Trained Knowledge</div>
              <div className="text-[11px] text-slate-500">Learns Your Business Rules</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
