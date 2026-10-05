import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Mail, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const autoReplyText = `Hi ${formData.name},\n\nThank you for reaching out to Indigo AI! We have received your enquiry regarding ${formData.websiteUrl || 'your website'}.\n\nOur team is currently reviewing your request and preparing a custom Virtual Agent preview. We will follow up with you shortly.\n\nBest regards,\nKhaylen Jacobs\nIndigo AI Team`;

    const proposedReplyTemplate = `Hi ${formData.name},\n\nThanks for reaching out to Indigo AI!\n\nWe have reviewed your site (${formData.websiteUrl}) and prepared a custom Virtual Agent preview showing how an AI receptionist can handle your customer enquiries 24/7.\n\nWould you have 10 minutes open tomorrow for a quick preview call?\n\nBest regards,\nKhaylen Jacobs | Indigo AI`;

    try {
      await fetch("https://formsubmit.co/ajax/indigoaikj@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Website URL / Business": formData.websiteUrl,
          "Client Message": formData.message || "Request for Custom Virtual Agent Preview",
          "_replyto": formData.email,
          "_subject": `⚡ New Website Enquiry from ${formData.name}`,
          "_autoresponse": autoReplyText,
          "_template": "table",
          "--- READY-TO-SEND REPLY TEMPLATE FOR YOU ---": proposedReplyTemplate
        })
      });
    } catch (err) {
      console.log("Enquiry submission fallback:", err);
    } finally {
      setIsSubmitting(false);
      setStep(2);
      try {
        confetti({ particleCount: 85, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
    }
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
              <span>Direct Email • indigoaikj@gmail.com</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Request Your Custom Virtual Agent Preview
            </h3>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              Enter your details below. Your enquiry will be sent directly to <strong>indigoaikj@gmail.com</strong> with an automatic reply sent to the client.
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Website URL or Business Name</label>
                <input
                  required
                  type="text"
                  placeholder="https://yourcompany.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Enquiry Details (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="How can we help your business?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-blue-primary justify-center text-xs py-2.5 mt-2 shadow-sm"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending to indigoaikj@gmail.com...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span>Submit Enquiry</span>
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

            <h3 className="text-xl font-bold text-slate-900">Enquiry Sent Successfully!</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you, <strong>{formData.name}</strong>. Your enquiry has been sent directly to <strong>indigoaikj@gmail.com</strong>. An automated confirmation email was sent to <strong>{formData.email}</strong>, and our team will get back to you shortly.
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


