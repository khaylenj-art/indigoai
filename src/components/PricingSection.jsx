import React from 'react';
import { Check, ArrowRight, ShieldCheck, Tag, Zap, ShoppingBag, Calendar, Mail, Globe, Server } from 'lucide-react';

export default function PricingSection({ onOpenEnquiryModal }) {
  const allFeatures = [
    { title: '100% Custom Responsive Website Build', desc: 'Bespoke design tailored specifically to your brand optics.' },
    { title: '24/7 Autonomous Virtual Agent', desc: 'Responds to website visitors in 0.4 seconds around the clock.' },
    { title: 'Direct Product Sales & Checkout', desc: 'Virtual Agent assists visitors in purchasing products directly.' },
    { title: 'Booking System Integration', desc: 'Seamlessly connects to your existing scheduling & calendar tools.' },
    { title: 'Custom Knowledge Base Training', desc: 'Trained on your business documentation, pricing, and FAQs.' },
    { title: 'Instant Lead Email Dispatch', desc: 'Prospect details sent straight to your email inbox.' },
    { title: 'Ongoing Maintenance & Uptime Hosting', desc: 'Continuous updates, security patches, and cloud server hosting.' }
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3 border border-sky-200">
            <Tag className="w-3.5 h-3.5" />
            <span>Simple All-In-One Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            One Complete Package. Zero Hidden Fees.
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Everything you need to launch a high-converting website equipped with an autonomous Virtual Agent.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="bg-gradient-to-b from-sky-50/80 to-white rounded-3xl p-8 md:p-12 border-2 border-sky-600 shadow-2xl relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="absolute top-4 right-4 bg-sky-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            All-Inclusive Solution
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-sky-200/80 pb-8">
            
            {/* Price Highlight (5 cols) */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Complete Package</span>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-extrabold text-slate-900">€550</span>
                <span className="text-xs font-semibold text-slate-500">one-time setup fee</span>
              </div>

              <div className="text-sm font-bold text-sky-700 pt-1">
                + €149 / month <span className="text-xs font-normal text-slate-600">(hosting, Virtual Agent AI & maintenance)</span>
              </div>

              <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                Includes your complete custom website build, Virtual Agent knowledge training, product sales setup, and ongoing 24/7 cloud operations.
              </p>
            </div>

            {/* Guarantee Callout (7 cols) */}
            <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-sky-100 shadow-sm space-y-2 text-xs text-slate-700">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>What's Included In Your €550 Setup:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600" /> Complete Website Build</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600" /> Virtual Agent Integration</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600" /> E-Commerce & Booking Sync</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-sky-600" /> Custom Knowledge Training</li>
              </ul>
            </div>

          </div>

          {/* Detailed Features Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Complete Feature Breakdown</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900">{feat.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onOpenEnquiryModal}
              className="btn-blue-primary text-sm py-3.5 px-8 shadow-md shadow-sky-500/20"
            >
              <span>Request Website Enquiry & Custom Preview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-slate-400 mt-2 font-medium">
              Provide your Name & Website URL to receive a custom Virtual Agent breakdown for your business.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
