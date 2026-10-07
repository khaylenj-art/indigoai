import React from 'react';
import { Brain, Globe, Cpu } from 'lucide-react';

export default function KnowledgeBaseTraining() {
  return (
    <section id="knowledge-base" className="py-14 bg-sky-50/40 border-y border-sky-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-9">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Trained On Your Custom Business Knowledge
          </h2>
          <p className="mt-2 text-slate-600 text-xs md:text-sm">
            Learns your website content, pricing rules, and FAQs to answer every visitor in your exact brand voice.
          </p>
        </div>

        {/* Short 3-Step Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-sky-600">Step 1</span>
              <h3 className="text-sm font-bold text-slate-900">Provide Business Link</h3>
              <p className="text-xs text-slate-500 mt-0.5">Share your existing website URL or PDF guides.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-sky-600">Step 2</span>
              <h3 className="text-sm font-bold text-slate-900">Knowledge Synthesis</h3>
              <p className="text-xs text-slate-500 mt-0.5">Learns boundaries, pricing rules, and FAQs.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-sky-600">Step 3</span>
              <h3 className="text-sm font-bold text-slate-900">24/7 Execution</h3>
              <p className="text-xs text-slate-500 mt-0.5">Answers enquiries and routes qualified leads.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

