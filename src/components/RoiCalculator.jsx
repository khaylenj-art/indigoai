import React, { useState } from 'react';
import { Calculator, TrendingDown, TrendingUp, DollarSign, ShoppingBag, Calendar, ArrowRight, Zap } from 'lucide-react';

export default function RoiCalculator({ onOpenEnquiryModal }) {
  const [monthlyEnquiries, setMonthlyEnquiries] = useState(120);
  const [dealValue, setDealValue] = useState(850);

  // Business Math:
  // 78% of customers purchase from the first business that responds.
  // 35% of enquiries arrive after business hours.
  // Slow replies lead to a 75% drop in conversion.
  const missedAfterHours = Math.round(monthlyEnquiries * 0.35);
  const estimatedLostRevenue = Math.round(missedAfterHours * dealValue * 0.5);
  const recoveredRevenue = Math.round(estimatedLostRevenue * 0.85);

  return (
    <section id="revenue-calculator" className="py-20 bg-sky-50/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3 border border-sky-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Loss Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            How Much Revenue Are You Losing To Delayed Replies?
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            78% of online customers buy from the company that responds first. Taking hours to reply costs thousands in lost sales every month.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-800">
                <span>Monthly Website Enquiries</span>
                <span className="text-sky-600 font-bold text-base">{monthlyEnquiries} enquiries / mo</span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={monthlyEnquiries}
                onChange={(e) => setMonthlyEnquiries(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>20 enquiries</span>
                <span>250 enquiries</span>
                <span>500+ enquiries</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-800">
                <span>Average Product / Service Sale Value</span>
                <span className="text-sky-600 font-bold text-base">€{dealValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>€100</span>
                <span>€2,500</span>
                <span>€5,000+</span>
              </div>
            </div>

            {/* Feature Callout Pill */}
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-600" />
                <span>What Your Virtual Agent Does Automatically:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span>Sells products directly on your site</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span>Integrates external booking systems</span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-600 to-indigo-600 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-sky-100 mb-1">
                Estimated Recoverable Revenue
              </div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                +€{recoveredRevenue.toLocaleString()}
                <span className="text-xs text-sky-100 block font-normal mt-1">/ month in captured sales</span>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-400/40 text-xs text-sky-100 space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span>Captures 35% after-hours traffic instantly</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span>Responds in 0.4s before leads bounce</span>
              </div>
            </div>

            <button
              onClick={onOpenEnquiryModal}
              className="w-full bg-white text-sky-900 hover:bg-sky-50 font-bold text-xs py-3 px-4 rounded-full shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Stop Losing Potential Sales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
