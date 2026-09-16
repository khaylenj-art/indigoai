import React, { useState } from 'react';
import { Moon, Sun, Clock, CheckCircle, Zap, DollarSign, Calendar, Sparkles, UserCheck, Smartphone } from 'lucide-react';

export default function SleepModeSimulator() {
  const [isNightMode, setIsNightMode] = useState(true);

  const nightTimeline = [
    {
      time: '02:14 AM',
      icon: Smartphone,
      iconColor: 'text-sky-400',
      title: 'Inquiry Received from Web Visitor',
      desc: 'Potential high-ticket client landed on your site after midnight.',
      tag: 'New Lead'
    },
    {
      time: '02:15 AM',
      icon: Zap,
      iconColor: 'text-amber-400',
      title: 'Indigo AI Responded (0.3s)',
      desc: 'Answered pricing inquiries, detailed service options & answered FAQs.',
      tag: 'Instant Answer'
    },
    {
      time: '02:16 AM',
      icon: Calendar,
      iconColor: 'text-purple-400',
      title: 'Appointment Auto-Booked',
      desc: 'Client selected Thursday @ 10:00 AM slot. Google Calendar event created.',
      tag: 'Calendar Synced'
    },
    {
      time: '02:16 AM',
      icon: DollarSign,
      iconColor: 'text-emerald-400',
      title: 'Retainer Deposit Secured',
      desc: 'Lead scored at 96% intent. Strategy call confirmed.',
      tag: '+$3,500 Value'
    }
  ];

  const dayTimeline = [
    {
      time: '02:14 PM',
      icon: Smartphone,
      iconColor: 'text-blue-500',
      title: 'Inquiry Received from Web Visitor',
      desc: 'Lead asks for commercial project quote while you are in a team meeting.',
      tag: 'Peak Hours'
    },
    {
      time: '02:15 PM',
      icon: Zap,
      iconColor: 'text-amber-500',
      title: 'Zero Delay Response',
      desc: 'Indigo AI handles inquiry immediately while you focus on execution.',
      tag: 'Automated'
    },
    {
      time: '02:16 PM',
      icon: Calendar,
      iconColor: 'text-indigo-500',
      title: 'Demo Call Locked In',
      desc: 'Booking invitation dispatched directly to your sales team.',
      tag: 'Lead Captured'
    }
  ];

  const activeTimeline = isNightMode ? nightTimeline : dayTimeline;

  return (
    <section id="sleep-simulator" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Card Wrapper */}
        <div 
          className={`rounded-3xl p-8 md:p-14 transition-all duration-700 shadow-2xl relative overflow-hidden border ${
            isNightMode 
              ? 'bg-slate-950 text-white border-slate-800 shadow-indigo-950/40' 
              : 'bg-slate-50 text-slate-900 border-slate-200/80 shadow-slate-200/50'
          }`}
        >
          
          {/* Night Glow Stars Effect */}
          {isNightMode && (
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          )}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The "While You Sleep" Advantage</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {isNightMode ? (
                  <>Your business works <span className="text-indigo-400">24 hours a day.</span> Even when you don't.</>
                ) : (
                  <>Never miss a lead <span className="text-blue-600">during busy work hours.</span></>
                )}
              </h2>

              <p className={`text-base md:text-lg leading-relaxed ${isNightMode ? 'text-slate-300' : 'text-slate-600'}`}>
                While competitors leave late-night web visitors waiting until 9:00 AM the next morning, Indigo AI engages every prospect instantly, answers custom questions, and locks appointments into your calendar autonomously.
              </p>

              {/* Interactive Toggle Switch */}
              <div className="pt-4 flex items-center gap-4">
                <span className={`text-xs font-semibold ${!isNightMode ? 'text-blue-600' : 'text-slate-500'}`}>Day Mode (2:14 PM)</span>
                
                <button
                  onClick={() => setIsNightMode(!isNightMode)}
                  className={`w-16 h-9 rounded-full p-1 transition-colors duration-300 flex items-center ${
                    isNightMode ? 'bg-indigo-600 justify-end' : 'bg-slate-300 justify-start'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900 transition-transform">
                    {isNightMode ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-500" />}
                  </div>
                </button>

                <span className={`text-xs font-semibold ${isNightMode ? 'text-indigo-400' : 'text-slate-500'}`}>Sleep Mode (02:14 AM) 💤</span>
              </div>

              {/* Status Box */}
              <div className={`p-4 rounded-2xl border ${isNightMode ? 'bg-indigo-950/40 border-indigo-800/40 text-indigo-200' : 'bg-white border-slate-200 text-slate-800'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center font-bold text-lg">
                    {isNightMode ? '🛌' : '💼'}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Business Owner Status</div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      {isNightMode ? 'Asleep & Resting (7.5 hrs)' : 'In Deep Work / Client Meetings'}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Timeline Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                <span>Autonomous Activity Log</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Simulator Feed
                </span>
              </div>

              <div className="space-y-3">
                {activeTimeline.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={index}
                      className={`p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                        isNightMode 
                          ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50' 
                          : 'bg-white border-slate-200/80 hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-slate-800/60 flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                        <IconComp className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-mono font-bold ${isNightMode ? 'text-indigo-400' : 'text-blue-600'}`}>{item.time}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            isNightMode ? 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/50' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm mt-1">{item.title}</h4>
                        <p className={`text-xs mt-0.5 ${isNightMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
