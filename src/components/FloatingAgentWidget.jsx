import React, { useState, useEffect } from 'react';
import { Bot, X, Send, ArrowRight, Mail, CheckCircle2, Loader2 } from 'lucide-react';
import { sendEmailToIndigo } from '../utils/sendEmail';

export default function FloatingAgentWidget({ onOpenEnquiryModal }) {
  // Auto pop up when user lands on page
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);
  const [inChatEnquiry, setInChatEnquiry] = useState({ name: '', email: '', message: '' });
  const [showInChatForm, setShowInChatForm] = useState(false);

  useEffect(() => {
    // Automatically pop up after 600ms when user lands on the page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: "Hi welcome to indigo, how can we help",
      options: [
        "Submit an enquiry",
        "What are your pricing plans?",
        "How fast can you set this up?"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal;
    setInputVal('');
    addUserMsg(text);
    respondAgent(text);
  };

  const handleOption = (opt) => {
    addUserMsg(opt);
    if (opt.toLowerCase().includes('enquiry') || opt.toLowerCase().includes('submit')) {
      setShowInChatForm(true);
      respondAgent(opt, { showForm: true });
    } else {
      respondAgent(opt);
    }
  };

  const addUserMsg = (text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text }]);
  };

  const respondAgent = (text, extra = {}) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const lower = text.toLowerCase();
      let reply = { id: Date.now() + 1, sender: 'agent', ...extra };

      if (extra.showForm || lower.includes('enquiry') || lower.includes('contact') || lower.includes('submit')) {
        reply.text = "You can submit your enquiry below and we will deliver it straight to indigoaikj@gmail.com:";
        reply.showEnquiryForm = true;
      } else if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost') || lower.includes('plan')) {
        reply.text = "Our all-inclusive pricing is simple and transparent: €550 one-time setup fee + €149/month. This includes your custom website build, 24/7 Virtual Agent, e-commerce/booking integrations, knowledge base training, and ongoing cloud operations.";
        reply.options = ["Submit an enquiry", "How fast can you set this up?"];
      } else if (lower.includes('fast') || lower.includes('setup')) {
        reply.text = "We deploy your custom website & Virtual Agent in under 48 hours, fully trained on your business documents and brand rules.";
        reply.options = ["What are your pricing plans?", "Submit an enquiry"];
      } else {
        reply.text = "Thank you for reaching out! Would you like to submit an official enquiry to our team at indigoaikj@gmail.com?";
        reply.options = ["Submit an enquiry", "What are your pricing plans?"];
      }

      setMessages((prev) => [...prev, reply]);
    }, 450);
  };

  const handleDirectEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!inChatEnquiry.name || !inChatEnquiry.email) return;

    setIsSubmittingEnquiry(true);

    await sendEmailToIndigo({
      name: inChatEnquiry.name,
      email: inChatEnquiry.email,
      message: inChatEnquiry.message,
      subject: `⚡ New Enquiry from ${inChatEnquiry.name} via Chatbot`
    });

    setIsSubmittingEnquiry(false);
    setShowInChatForm(false);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'agent',
        text: `Thank you, ${inChatEnquiry.name}! Your enquiry has been sent directly to indigoaikj@gmail.com, and an automatic confirmation email has been dispatched to ${inChatEnquiry.email}.`,
        isSuccessBadge: true
      }
    ]);

    setInChatEnquiry({ name: '', email: '', message: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-blue-primary p-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-2.5 group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-sky-600 animate-pulse"></span>
          </div>
          <span className="font-semibold text-xs hidden sm:inline">Ask Indigo AI</span>
        </button>
      )}

      {/* Floating Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-sky-600 to-indigo-600 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs">Indigo AI Assistant</h4>
                <div className="text-[10px] text-sky-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active 24/7 • Ready to Help
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/60 text-xs">
            {messages.map((m) => (
              <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[88%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-sky-600 text-white rounded-br-none font-medium'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
                }`}>
                  <p>{m.text}</p>

                  {/* Options Buttons */}
                  {m.options && (
                    <div className="mt-2.5 space-y-1.5">
                      {m.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOption(opt)}
                          className="w-full text-left p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold transition-colors border border-sky-200/60 text-[11px] flex items-center justify-between group"
                        >
                          <span>{opt}</span>
                          <ArrowRight className="w-3 h-3 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Embedded Form for Direct Enquiry */}
                  {m.showEnquiryForm && (
                    <form 
                      action="https://formspree.io/f/xjygyrzo"
                      method="POST"
                      onSubmit={handleDirectEnquirySubmit} 
                      className="mt-3 pt-3 border-t border-slate-100 space-y-2"
                    >
                      <input type="hidden" name="_subject" value="New website enquiry" />
                      <input type="hidden" name="_template" value="table" />
                      
                      <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-sky-600" />
                        <span>Send enquiry to Indigo AI</span>
                      </div>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={inChatEnquiry.name}
                        onChange={(e) => setInChatEnquiry({ ...inChatEnquiry, name: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={inChatEnquiry.email}
                        onChange={(e) => setInChatEnquiry({ ...inChatEnquiry, email: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <textarea
                        rows="2"
                        name="message"
                        placeholder="Your Enquiry / Details"
                        value={inChatEnquiry.message}
                        onChange={(e) => setInChatEnquiry({ ...inChatEnquiry, message: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingEnquiry}
                        className="w-full btn-blue-primary justify-center text-xs py-2 shadow-sm"
                      >
                        {isSubmittingEnquiry ? (
                          <span className="flex items-center gap-1.5">
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            Sending Enquiry...
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5">
                            <span>Submit Enquiry Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </button>
                    </form>
                  )}

                  {/* Success Confirmation Badge */}
                  {m.isSuccessBadge && (
                    <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-[11px] flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Sent to <strong>indigoaikj@gmail.com</strong></span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-slate-400 text-xs flex items-center gap-1 bg-white px-3 py-2 rounded-xl border border-slate-200 w-max">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-200"></span>
              </div>
            )}
          </div>

          {/* Form Footer */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question or request help..."
              className="flex-1 bg-slate-100 px-3.5 py-2 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button type="submit" className="p-2.5 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}

