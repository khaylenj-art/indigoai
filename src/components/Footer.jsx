import React from 'react';
import { Bot, ArrowUpRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function Footer({ onOpenEnquiryModal, onOpenLegalModal }) {
  return (
    <footer className="bg-sky-50/60 text-slate-700 pt-16 pb-12 border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Soft Blue Banner */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-8 md:p-10 mb-12 text-center text-white relative overflow-hidden shadow-lg">
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to equip your website with an autonomous Virtual Agent?
            </h3>
            <p className="text-sky-100 text-xs md:text-sm">
              Deploy your custom website and 24/7 Virtual Agent in under 48 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiryModal}
                className="bg-white text-sky-900 hover:bg-sky-50 font-bold px-6 py-3 rounded-full text-xs shadow-md transition-transform active:scale-95 inline-flex items-center gap-2"
              >
                <span>Request Custom Preview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-sky-200/60 text-xs">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-sm">indigo.ai</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Modern website design equipped with 24/7 autonomous Virtual Agents for high-growth businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs mb-2">Platform & Team</h4>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li><a href="#founders" className="hover:text-sky-600 transition-colors font-medium">Co-Founders (Khaylen & Ahkeel)</a></li>
              <li><a href="#virtual-agent-demo" className="hover:text-sky-600 transition-colors">Virtual Agent Demo</a></li>
              <li><a href="#knowledge-base" className="hover:text-sky-600 transition-colors">Knowledge Base Training</a></li>
              <li><a href="#pricing" className="hover:text-sky-600 transition-colors">Agency Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs mb-2">Security & Policies</h4>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> European & Irish Market Compliant</li>
              <li className="flex items-center gap-1.5 text-sky-700 font-medium">
                <RefreshCw className="w-3 h-3 text-sky-600" /> Same-Day Cancellation Guarantee
              </li>
              <li>256-Bit SSL Data Encryption</li>
              <li>Instant Formspree Email Dispatch</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <div>© {new Date().getFullYear()} Indigo AI Technologies. All rights reserved.</div>
          <div className="flex items-center gap-5 mt-2 sm:mt-0 font-medium">
            <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-sky-600 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-sky-600 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onOpenLegalModal('terms')} className="text-sky-600 hover:text-sky-800 transition-colors font-semibold">
              Same-Day Cancellation Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

