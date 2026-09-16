import React from 'react';
import { Brain, Globe, FileText, Sliders, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function KnowledgeBaseTraining() {
  return (
    <section id="knowledge-base" className="py-20 bg-sky-50/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Knowledge Integration</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-1">
            Trained On Your Custom Business Knowledge
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Your Virtual Agent learns your website content, service documentation, pricing rules, and FAQs so it answers every visitor question in your exact brand voice.
          </p>
        </div>

        {/* 3-Step Process Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center font-bold text-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Step 1</span>
              <h3 className="text-base font-bold text-slate-900">Provide Business URL or Docs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide your existing website link, PDF service guides, or FAQ documents.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-100 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Instant Data Extraction</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center font-bold text-sm">
              <Brain className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Step 2</span>
              <h3 className="text-base font-bold text-slate-900">Knowledge Base Synthesis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Virtual Agent learns your business boundaries, objection rules, and response criteria.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-100 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Learns in Under 60 Seconds</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center font-bold text-sm">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Step 3</span>
              <h3 className="text-base font-bold text-slate-900">Accurate 24/7 Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Virtual Agent communicates with visitors, answers enquiries, and forwards qualified leads.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-100 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>100% Brand Compliant</span>
            </div>
          </div>

        </div>

        {/* Feature Pill Grid */}
        <div className="bg-white rounded-2xl p-6 border border-sky-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-700 shadow-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Strict Boundaries (Zero Hallucinations)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Custom Lead Qualification Rules</span>
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
