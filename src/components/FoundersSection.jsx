import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function FoundersSection() {
  const founders = [
    {
      name: 'Khaylen Jacobs',
      role: 'Co - Founder',
      title: 'Co-Founder & AI Systems Architect',
      image: '/khaylen.jpg'
    },
    {
      name: 'Ahkeel Khan',
      role: 'Co - Founder',
      title: 'Co-Founder & Lead Engineer',
      image: '/akheel.jpeg'
    }
  ];

  return (
    <section id="founders" className="py-20 bg-slate-50/70 border-y border-slate-200/60 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-3 border border-sky-200/60">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Meet the Founders
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            We build modern, high-converting websites backed by 24/7 Virtual Agents that turn every site visitor into a booked customer.
          </p>
        </div>

        {/* 2 Founders Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Founder Image Frame */}
              <div className="relative mb-5">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-sky-100/80 shadow-md group-hover:ring-sky-300 transition-all duration-300 bg-slate-100">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 rounded-full shadow-xs tracking-wide uppercase whitespace-nowrap">
                  Indigo AI
                </div>
              </div>

              {/* Founder Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
                {founder.name}
              </h3>

              {/* Underneath Heading: Co - Founder */}
              <div className="mt-1 text-sm font-bold text-sky-600 tracking-wide uppercase flex items-center gap-1.5 justify-center">
                <ShieldCheck className="w-4 h-4 text-sky-500" />
                <span>{founder.role}</span>
              </div>

              {/* Sub-Title / Role */}
              <div className="text-xs font-medium text-slate-500 mt-1">
                {founder.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
