import React from 'react';
import { ArrowRight, Bot, Globe, ShieldCheck, ArrowRightCircle, Sparkles } from 'lucide-react';

export default function Hero({ onOpenEnquiryModal, onScrollToDemo }) {
  const processSteps = [
    { title: "AI answers questions", icon: "💬" },
    { title: "Recommends right service", icon: "✨" },
    { title: "Gives instant pricing", icon: "🏷️" },
    { title: "Captures details", icon: "📋" },
    { title: "Books appointment", icon: "📅" }
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-sky-50/70 via-slate-50/30 to-white overflow-hidden">
      
      {/* Ambient Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-sky-200/35 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs font-semibold mb-6 border border-sky-200/80 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Stop selling static websites — Turn visitors into booked clients</span>
        </div>

        {/* Headline reflecting user image & website build offering */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-4xl mx-auto">
          Turn website visitors into booked customers — 24/7.
          <span className="block text-xl md:text-3xl font-semibold text-sky-600 mt-3">
            And now we build modern websites equipped with autonomous Virtual Agents.
          </span>
        </h1>

        {/* Flow Process Bar (From copied image) */}
        <div className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-sky-200/70 shadow-md max-w-4xl mx-auto">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-center sm:text-left">
            How Your New Website Works 24/7:
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-1 text-slate-800 text-xs font-semibold">
            {processSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-1.5 bg-sky-50/80 px-3 py-2 rounded-xl border border-sky-100 text-sky-950 w-full sm:w-auto justify-center">
                  <span className="text-sm">{step.icon}</span>
                  <span>{step.title}</span>
                </div>
                {idx < processSteps.length - 1 && (
                  <ArrowRightCircle className="w-4 h-4 text-sky-400 hidden sm:block flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button 
            onClick={onScrollToDemo}
            className="btn-blue-primary text-sm py-3.5 px-8 shadow-md hover:shadow-lg"
          >
            <span>Test Virtual Agent Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={onOpenEnquiryModal}
            className="btn-blue-secondary text-sm py-3.5 px-8"
          >
            <span>Send Enquiry & Website URL</span>
          </button>
        </div>

        {/* 3 Pillar Summary Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Bot className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Virtual Agents</div>
              <div className="text-[11px] text-slate-500">24/7 Instant Response</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Custom Web Build</div>
              <div className="text-[11px] text-slate-500">High-Converting Layouts</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
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

