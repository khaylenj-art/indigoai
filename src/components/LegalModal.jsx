import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, RefreshCw } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, defaultTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[88vh] flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-2 border border-sky-100">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Indigo AI Legal & Terms</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Privacy Policy & Terms of Service
          </h3>
        </div>

        {/* Tabs Switcher */}
        <div className="flex border-b border-slate-200 mb-6 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 transition-colors flex items-center gap-2 relative ${
              activeTab === 'privacy' 
                ? 'text-sky-600 border-b-2 border-sky-600' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 transition-colors flex items-center gap-2 relative ${
              activeTab === 'terms' 
                ? 'text-sky-600 border-b-2 border-sky-600' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          
          {/* Highlighted Same-Day Cancellation Banner */}
          <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sky-950 text-xs sm:text-sm">Same-Day Cancellation Policy</h4>
              <p className="text-sky-900 text-xs mt-1">
                You can cancel any service, website build, or subscription request on the <strong>same day</strong> with 100% instant refund guarantee and zero cancellation fees. Simply notify our team, and your request will be processed immediately.
              </p>
            </div>
          </div>

          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">1. Information Collection & Usage</h4>
              <p>
                Indigo AI respects your personal and business privacy. We only collect essential contact information (such as your name, business email, phone number, and website URL) that you voluntarily submit through our contact forms or Virtual Agent interfaces.
              </p>

              <h4 className="text-base font-bold text-slate-900">2. Data Security & SSL Encryption</h4>
              <p>
                All data submitted through Indigo AI web applications is encrypted using standard 256-bit SSL technology. We do not sell, rent, or trade your contact information to third-party advertisers.
              </p>

              <h4 className="text-base font-bold text-slate-900">3. Virtual Agent Data Handling</h4>
              <p>
                Enquiries and conversation transcripts collected by your custom Virtual Agent are routed directly to your designated business email address and secure dashboard. You retain full ownership of all customer lead data.
              </p>

              <h4 className="text-base font-bold text-slate-900">4. Your Data Rights</h4>
              <p>
                You may request a copy of all stored data or request immediate deletion of your business records at any time by emailing <strong>indigoaikj@gmail.com</strong>.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">1. Website Building & Virtual Agent Services</h4>
              <p>
                Indigo AI provides custom website design, development, and integration of autonomous 24/7 Virtual Agents for lead capture, FAQ answers, and appointment booking.
              </p>

              <h4 className="text-base font-bold text-slate-900">2. Guarantee & Same-Day Cancellation</h4>
              <p>
                We stand behind our work. If you order a website build or Virtual Agent setup and decide to cancel on the same day, we offer a 100% full money-back refund with no questions asked.
              </p>

              <h4 className="text-base font-bold text-slate-900">3. Transparent Pricing</h4>
              <p>
                Our standard service package is billed at a fixed €550 initial setup fee plus €149/month ongoing operations, hosting, and Virtual Agent model maintenance. No hidden charges or surprise lock-in contracts.
              </p>

              <h4 className="text-base font-bold text-slate-900">4. Support & Maintenance</h4>
              <p>
                We monitor Virtual Agent uptime 24/7. Ongoing support includes knowledge base updates, design tweaks, and lead notification verification.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-5 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">Effective: {new Date().getFullYear()}</span>
          <button
            onClick={onClose}
            className="btn-blue-primary px-5 py-2 text-xs"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
}
