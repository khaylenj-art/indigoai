import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Mail, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
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
              <Mail className="w-3.5 h-3.5" />
              <span>Website & Virtual Agent Enquiry</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Request Your Custom Virtual Agent Preview
            </h3>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              Enter your Name and Website URL below. We will analyze your site and email you a Virtual Agent preview for your business.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
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
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Website URL</label>
                <input
                  required
                  type="text"
                  placeholder="https://yourcompany.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-blue-primary justify-center text-xs py-2.5 mt-2"
              >
                <span>Submit Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you, <strong>{formData.name}</strong>. We have received your request for <strong>{formData.websiteUrl}</strong>. Our team will email your custom Virtual Agent preview to <strong>{formData.email}</strong> within 24 hours.
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
