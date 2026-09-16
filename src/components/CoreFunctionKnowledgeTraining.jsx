import React from 'react';
import { Brain, Globe, FileText, Sliders, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function CoreFunctionKnowledgeTraining() {
  return (
    <section id="knowledge-training" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Core Function 3</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-1">
            Trained On Your Custom Business Knowledge
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            The bot absorbs your website content, documents, pricing structures, and FAQs so it answers every visitor question accurately in your exact brand tone.
          </p>
        </div>

        {/* Clean 3-Step Process Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="bg-sky-50/40 rounded-2xl p-6 border border-sky-100 space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-white text-sky-600 border border-sky-200/80 flex items-center justify-center font-bold text-sm shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Step 1</span>
              <h3 className="text-base font-bold text-slate-900">Connect Business Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide your website URL, PDF pricing guides, or service documentation.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-100 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Instant Web Crawling</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-sky-50/40 rounded-2xl p-6 border border-sky-100 space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-white text-sky-600 border border-sky-200/80 flex items-center justify-center font-bold text-sm shadow-sm">
              <Brain className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Step 2</span>
              <h3 className="text-base font-bold text-slate-900">AI Knowledge Base Synthesis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indigo AI synthesizes your business logic, objection handling rules, and calendar availability.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-100 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Learns in 60 Seconds</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-sky-50/40 rounded-2xl p-6 border border-sky-100 space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-white text-sky-600 border border-sky-200/80 flex items-center justify-center font-bold text-sm shadow-sm">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Step 3</span>
              <h3 className="text-base font-bold text-slate-900">Accurate 24/7 Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bot communicates seamlessly with visitors and qualifies leads according to your exact criteria.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-100 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>100% Brand Compliant</span>
            </div>
          </div>

        </div>

        {/* Knowledge Feature List */}
        <div className="bg-sky-50/30 rounded-2xl p-6 border border-sky-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-700">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Never Hallucinates Unapproved Pricing</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Custom Qualification Logic & Rules</span>
          </div>
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Updates Automatically as Docs Change</span>
          </div>
        </div>

      </div>
    </section>
  );
}
