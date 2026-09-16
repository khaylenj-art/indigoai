import React from 'react';
import { Zap, Calendar, Brain, MessageSquare, Check, ArrowRight, ShieldCheck, Database, Sliders } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-blue-600 mb-2">Engineered for High-Growth Brands</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Four pillars of an autonomous web receptionist.
          </h3>
          <p className="mt-4 text-slate-600 text-lg">
            Built with Apple-grade precision. Everything your website needs to capture, qualify, and book clients without human intervention.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Instant Response (7 cols) */}
          <div className="md:col-span-7 glass-card rounded-3xl p-8 border border-slate-200/80 shadow-sm glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">0.4-Second Instant Response Engine</h4>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                78% of clients buy from the business that responds first. Indigo AI engages visitors instantly before they bounce to a competitor site.
              </p>
            </div>

            {/* Speed Comparison Bar Chart */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200/70 shadow-inner space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-blue-600 flex items-center gap-1">⚡ Indigo AI Receptionist</span>
                  <span className="text-blue-600">0.4 Seconds</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-[8%] animate-pulse"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Traditional Human Form Reply</span>
                  <span>4.2 Hours Avg</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Calendar & CRM Sync (5 cols) */}
          <div className="md:col-span-5 glass-card rounded-3xl p-8 border border-slate-200/80 shadow-sm glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Autonomous Calendar Sync</h4>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                Connect your Google Calendar, Outlook, or Calendly. Indigo AI negotiates available times and confirms meetings automatically.
              </p>
            </div>

            <div className="mt-6 p-4 bg-white rounded-2xl border border-slate-200/70 space-y-2">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Zero Double Booking Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Custom SMS & Email Reminders</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>HubSpot / Salesforce Lead Dispatch</span>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Custom Brand Brain (5 cols) */}
          <div className="md:col-span-5 glass-card rounded-3xl p-8 border border-slate-200/80 shadow-sm glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Trained On Your Brand</h4>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                Simply input your website URL or upload PDF price sheets. Indigo AI learns your services, tone, and objection handling rules instantly.
              </p>
            </div>

            <div className="mt-6 p-3 bg-purple-50/50 border border-purple-200/60 rounded-xl text-xs text-purple-900 font-medium flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-600" />
              <span>Learns your business model in under 60 seconds</span>
            </div>
          </div>

          {/* Bento Item 4: Omnichannel (7 cols) */}
          <div className="md:col-span-7 glass-card rounded-3xl p-8 border border-slate-200/80 shadow-sm glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Deploy Everywhere Your Clients Are</h4>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                Embed directly on your website, WhatsApp Business, Instagram Direct Messages, or SMS channels from a unified dashboard.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-center text-xs font-semibold text-slate-800">
                🌐 Website Chat
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-center text-xs font-semibold text-slate-800">
                📱 WhatsApp AI
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-center text-xs font-semibold text-slate-800">
                📸 Instagram DM
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
