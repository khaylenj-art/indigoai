import React from 'react';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';

export default function Hero({ onOpenEnquiryModal, onScrollToDemo }) {
  const processSteps = [
    "AI answers questions",
    "Recommends right service",
    "Gives instant pricing",
    "Captures details",
    "Books appointment"
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-sky-50/70 via-slate-50/30 to-white overflow-hidden">
      
      {/* Ambient Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-sky-200/35 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-4xl mx-auto">
          Turn website visitors into booked customers — 24/7.
        </h1>

        {/* Small text under subhead */}
        <p className="mt-3 text-sm md:text-base font-medium text-slate-500">
          Stop selling static websites with no Call to action
        </p>

        {/* Flow Process Bar (without emojis) */}
        <div className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-sky-200/70 shadow-md max-w-4xl mx-auto">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-center sm:text-left">
            How Your New Website Works 24/7:
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-1 text-slate-800 text-xs font-semibold">
            {processSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center justify-center bg-sky-50/80 px-3 py-2 rounded-xl border border-sky-100 text-sky-950 w-full sm:w-auto">
                  <span>{step}</span>
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

      </div>
    </section>
  );
}


