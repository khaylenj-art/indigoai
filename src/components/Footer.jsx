import React, { useState } from 'react';
import { Bot, ArrowUpRight, ShieldCheck, RefreshCw, ChevronDown, Lock, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenEnquiryModal, onOpenLegalModal }) {
  const [isLegalExpanded, setIsLegalExpanded] = useState(false);

  return (
    <footer className="bg-sky-50/60 text-slate-700 pt-16 pb-12 border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Soft Blue Offer Banner */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-8 md:p-10 mb-12 text-center text-white relative overflow-hidden shadow-lg">
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-100 text-[11px] font-semibold backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-sky-200" />
              <span>Flat-Fee Launch Offer • Under 48-Hour Deployment</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to equip your website with an autonomous Virtual Agent?
            </h3>
            <p className="text-sky-100 text-xs md:text-sm">
              Complete custom build · <strong className="text-white font-bold">€250 setup fee</strong> + <strong className="text-white font-bold">€95/month</strong> · Zero lock-in contracts.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiryModal}
                className="bg-white text-sky-900 hover:bg-sky-50 font-bold px-6 py-3 rounded-full text-xs shadow-md transition-transform active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Preview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Primary Links Grid — Focused strictly on Product & Offer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-sky-200/60 text-xs">
          
          {/* Brand & Offer Summary (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-sm">indigo.ai</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Modern bespoke websites equipped with 24/7 autonomous Virtual Agents that capture enquiries, book appointments, and close sales around the clock.
            </p>
            
            {/* Offer Mini-Badge */}
            <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-2xs space-y-1">
              <div className="text-[11px] font-bold text-slate-900 flex items-center justify-between">
                <span className="text-sky-700">All-Inclusive Offer</span>
                <span className="font-extrabold text-slate-900">€250 setup + €95/mo</span>
              </div>
              <p className="text-[10px] text-slate-500">
                Custom website build, 24/7 Virtual Agent, knowledge base training, fast cloud hosting & updates.
              </p>
            </div>
          </div>

          {/* Platform & Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 text-xs mb-2.5">Platform & Solutions</h4>
            <ul className="space-y-2 text-slate-600 text-[11px]">
              <li><a href="#virtual-agent-demo" className="hover:text-sky-600 transition-colors">Virtual Agent Showcase</a></li>
              <li><a href="#knowledge-base" className="hover:text-sky-600 transition-colors">Knowledge Base Training</a></li>
              <li><a href="#calculator" className="hover:text-sky-600 transition-colors">Revenue Loss Calculator</a></li>
              <li><a href="#pricing" className="hover:text-sky-600 transition-colors">Pricing Breakdown (€250)</a></li>
              <li><a href="#founders" className="hover:text-sky-600 transition-colors font-medium">Co-Founders (Khaylen & Ahkeel)</a></li>
            </ul>
          </div>

          {/* Offer Highlights & Fast CTA (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-900 text-xs mb-2.5">What's In The Offer</h4>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" /> 100% Bespoke Responsive Website</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" /> Autonomous 24/7 Virtual Agent</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" /> Business FAQ & Docs Knowledge Training</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" /> Turnkey Deployment in Under 48h</li>
            </ul>
            <div className="pt-1">
              <button
                onClick={onOpenEnquiryModal}
                className="text-sky-600 hover:text-sky-800 font-bold text-[11px] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Request Custom Website Preview</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Collapsible Legal & Compliance Section — Subordinated to avoid visual overwhelm */}
        <div className="py-4 border-b border-sky-200/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[10px] text-slate-400">
            {/* Subtle Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-sky-500" />
                <span>EU & Irish Market Compliant</span>
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-sky-500" />
                <span>256-Bit SSL Data Encryption</span>
              </span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-sky-500" />
                <span>Same-Day Cancellation Guarantee</span>
              </span>
            </div>

            {/* Toggle Button for Details */}
            <button
              onClick={() => setIsLegalExpanded(!isLegalExpanded)}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 hover:text-sky-600 transition-colors w-max cursor-pointer"
              aria-expanded={isLegalExpanded}
            >
              <span>{isLegalExpanded ? 'Hide' : 'View'} Legal & Compliance Disclosures</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLegalExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Collapsible Drawer */}
          {isLegalExpanded && (
            <div className="mt-3 p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-sky-100 text-[10px] text-slate-500 space-y-2.5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <div className="font-bold text-slate-700 mb-0.5">GDPR & Data Protection</div>
                  <p className="leading-relaxed">
                    Designed for European and Irish businesses in adherence with EU GDPR regulations. All enquiry data is SSL encrypted in transit and routed directly to verified business owners without third-party data tracking.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-slate-700 mb-0.5">Transparent Pricing Terms</div>
                  <p className="leading-relaxed">
                    Fixed €250 one-time initial setup fee covering custom design and Virtual Agent knowledge base ingestion, followed by €95/month for cloud hosting, 24/7 uptime monitoring, and AI model updates. No hidden fees.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-slate-700 mb-0.5">Same-Day Cancellation</div>
                  <p className="leading-relaxed">
                    We offer a same-day cancellation guarantee on all setup orders. If you place an order and notify our team on the same business day, your request is honored immediately with zero friction.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <span className="font-semibold text-slate-600">Full Policy Documents:</span>
                <button
                  onClick={() => onOpenLegalModal('privacy')}
                  className="text-sky-600 hover:underline font-medium cursor-pointer"
                >
                  Privacy Policy & Data Rights →
                </button>
                <button
                  onClick={() => onOpenLegalModal('terms')}
                  className="text-sky-600 hover:underline font-medium cursor-pointer"
                >
                  Terms of Service & Cancellation →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar — Ultra clean & focused */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <div>© {new Date().getFullYear()} Indigo AI Technologies. All rights reserved.</div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0 font-medium">
            <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-sky-600 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-sky-600 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => onOpenLegalModal('terms')} className="text-slate-500 hover:text-sky-600 transition-colors cursor-pointer">
              Cancellation Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
