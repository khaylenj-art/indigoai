import React, { useState } from 'react';
import { Clock, TrendingDown, TrendingUp, Zap, DollarSign, AlertCircle, ArrowRight } from 'lucide-react';

export default function CoreFunctionCostOfDelay({ onOpenBookModal }) {
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [dealValue, setDealValue] = useState(1500);

  // Business logic math:
  // 78% of customers purchase from the vendor that responds first.
  // Responding after 5 mins decreases lead qualification chances by 21x.
  // 35% of website enquiries occur after business hours.
  const missedLeads = Math.round(monthlyLeads * 0.35);
  const lostMonthlyRevenue = missedLeads * dealValue * 0.4;
  const recoveredRevenue = Math.round(lostMonthlyRevenue * 0.85);

  return (
    <section id="cost-of-delay" className="py-20 bg-sky-50/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Core Function 2</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-1">
            The Cost of Delay: Why Slow Responses Lose Clients
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Research shows 78% of clients buy from the business that responds first. Taking hours—or overnight—to reply costs thousands in lost revenue.
          </p>
        </div>

        {/* Clean 2-Column Comparison Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Box 1: Slow Response (The Problem) */}
          <div className="bg-white rounded-2xl p-6 border border-rose-200 shadow-sm relative space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase">
                <Clock className="w-4 h-4 text-rose-600" />
                <span>Traditional Slow Response</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-semibold">
                Average Reply: 4.2 Hours
              </span>
            </div>

            <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-100 space-y-2 text-xs text-rose-950">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">78% Client Loss Rate</strong>
                  Visitors move to a competitor when an immediate reply is missing.
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-rose-200/60">
                <TrendingDown className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">21x Drop in Qualification</strong>
                  Leads go cold after 5 minutes of waiting.
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Indigo AI Instant 0.4s Response (The Solution) */}
          <div className="bg-white rounded-2xl p-6 border border-sky-200 shadow-sm relative space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase">
                <Zap className="w-4 h-4 text-sky-600" />
                <span>Indigo AI Instant Response</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-semibold">
                Response Time: 0.4 Seconds
              </span>
            </div>

            <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-100 space-y-2 text-xs text-sky-950">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Immediate Visitor Engagement</strong>
                  Captures 100% of website leads while they are actively searching.
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-sky-200/60">
                <DollarSign className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">395% Increase in Bookings</strong>
                  Converts after-hours visitors into scheduled calendar appointments.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Simple Revenue Loss Calculator Slider */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Calculate Your Lost Revenue</h3>

            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Estimated Monthly Inquiries</span>
                <span className="text-sky-600 font-bold">{monthlyLeads} enquiries / mo</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Average Value Per Client</span>
                <span className="text-sky-600 font-bold">${dealValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="250"
                max="10000"
                step="250"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-sky-50 rounded-xl p-6 border border-sky-100 text-center space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Estimated Monthly Recoverable Revenue</div>
            <div className="text-3xl md:text-4xl font-bold text-sky-700">
              +${recoveredRevenue.toLocaleString()}
              <span className="text-xs text-slate-500 block font-normal mt-1">/ month in captured business</span>
            </div>
            <button
              onClick={onOpenBookModal}
              className="btn-blue-primary w-full justify-center text-xs py-2.5 mt-2"
            >
              <span>Stop Losing Revenue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
