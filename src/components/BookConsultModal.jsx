import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendEmailToIndigo } from '../utils/sendEmail';

export default function BookConsultModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    preferredDate: 'Tomorrow at 10:00 AM'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await sendEmailToIndigo({
      name: formData.name,
      email: formData.email,
      website: formData.website,
      slot: formData.preferredDate,
      subject: `⚡ New Strategy Booking Request from ${formData.name}`
    });

    setIsSubmitting(false);
    setStep(2);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-3 border border-sky-100">
              <Calendar className="w-3.5 h-3.5" />
              <span>Strategy Session</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Schedule Your AI Website Demo
            </h3>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              We'll analyze your current site and show you how an instant AI receptionist converts website visitors into booked clients.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Current Website (Optional)</label>
                <input
                  type="text"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time Slot</label>
                <select
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option>Tomorrow at 10:00 AM</option>
                  <option>Tomorrow at 02:30 PM</option>
                  <option>Thursday at 11:00 AM</option>
                  <option>Friday at 04:00 PM</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-blue-primary justify-center text-xs py-2.5 mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Dispatching to khaylenj@indigo.irish...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span>Confirm Strategy Reservation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Reservation Confirmed</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you, <strong>{formData.name}</strong>. Your strategy call request has been sent directly to <strong>khaylenj@indigo.irish</strong>.
            </p>

            <button
              onClick={() => { setStep(1); onClose(); }}
              className="btn-blue-secondary text-xs px-5 py-2 mt-2"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

