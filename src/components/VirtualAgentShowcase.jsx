import React, { useState } from 'react';
import { Bot, Send, CheckCircle2, Calendar, Mail, Clock, RefreshCw, ShieldCheck, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VirtualAgentShowcase() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: "Hello! Welcome to Apex Dental & Aesthetics Clinic. I am your 24/7 Virtual Agent assistant. How can I assist you with your appointment or pricing today?",
      options: [
        "Book a consultation appointment",
        "What services & pricing options do you offer?",
        "Ask about teeth whitening & veneers"
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Interactive Booking State
  const [bookingStep, setBookingStep] = useState('idle'); // 'idle' | 'choosing_day' | 'entering_details' | 'confirmed'
  const [selectedDayTime, setSelectedDayTime] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });

  const availableSlots = [
    { day: 'Tomorrow', time: '10:00 AM' },
    { day: 'Tomorrow', time: '02:30 PM' },
    { day: 'Thursday', time: '11:00 AM' },
    { day: 'Friday', time: '03:30 PM' }
  ];

  const servicePricingList = [
    { name: 'New Patient Checkup & Hygiene', price: '€95' },
    { name: 'In-Office Laser Teeth Whitening', price: '€280' },
    { name: 'Invisalign Orthodontic Assessment', price: 'Free Consultation' },
    { name: 'Cosmetic Porcelain Veneers Exam', price: '€150' }
  ];

  const handleOptionClick = (text) => {
    addMessage('user', text);
    processReply(text);
  };

  const handleSubmitMsg = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal;
    setInputVal('');
    addMessage('user', text);
    processReply(text);
  };

  const addMessage = (sender, text, extra = {}) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender, text, ...extra }]);
  };

  const processReply = (userText) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const lower = userText.toLowerCase();

      if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost') || lower.includes('offer') || lower.includes('option')) {
        addMessage('agent', "Here are our current treatment and consultation pricing options at Apex Dental Clinic:", {
          isPricingTable: true
        });
      } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('consultation') || lower.includes('schedule')) {
        setBookingStep('choosing_day');
        addMessage('agent', "I can reserve your appointment right now. What day and time works best for you?", {
          isSlotPicker: true
        });
      } else {
        setBookingStep('choosing_day');
        addMessage('agent', "What day and time would you like to schedule your consultation?", {
          isSlotPicker: true
        });
      }
    }, 450);
  };

  const triggerSlotPickerFromPricing = () => {
    setBookingStep('choosing_day');
    addMessage('agent', "Please select your preferred day and time for your consultation slot below:", {
      isSlotPicker: true
    });
  };

  const handleSelectSlot = (slot) => {
    setSelectedDayTime(slot);
    setBookingStep('entering_details');
    addMessage('user', `${slot.day} at ${slot.time}`);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage('agent', `Great! I have reserved ${slot.day} at ${slot.time}. Please enter your Name and Email Address so I can dispatch an email verification link to approve your booking:`, {
        isVerificationForm: true,
        slot
      });
    }, 400);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email) return;
    setBookingStep('confirmed');

    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    } catch (err) {}

    addMessage('agent', `Perfect, ${userDetails.name}! Your consultation for ${selectedDayTime.day} at ${selectedDayTime.time} is reserved. An email verification link has been dispatched to ${userDetails.email} to approve your booking.`, {
      isConfirmedBadge: true,
      email: userDetails.email,
      slot: selectedDayTime
    });
  };

  const resetDemo = () => {
    setBookingStep('idle');
    setSelectedDayTime(null);
    setUserDetails({ name: '', email: '' });
    setMessages([
      {
        id: 1,
        sender: 'agent',
        text: "Hello! Welcome to Apex Dental & Aesthetics Clinic. I am your 24/7 Virtual Agent assistant. How can I assist you with your appointment or pricing today?",
        options: [
          "Book a consultation appointment",
          "What services & pricing options do you offer?",
          "Ask about teeth whitening & veneers"
        ]
      }
    ]);
  };

  return (
    <section id="virtual-agent-demo" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Interactive Healthcare Agent Demo</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-1">
            24/7 Virtual Agent • Healthcare Booking & Pricing Showcase
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Test the live Virtual Agent on a trusted medical clinic website below. Ask about service pricing options, pick a day and time, and receive an instant email verification.
          </p>
        </div>

        {/* Side-by-Side Card Layout */}
        <div className="bg-sky-50/50 rounded-3xl p-6 md:p-10 border border-sky-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Virtual Agent Interface (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md flex flex-col h-[540px] overflow-hidden">
            
            {/* Header */}
            <div className="p-4 bg-sky-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">Apex Dental & Aesthetics Clinic</div>
                  <div className="text-[11px] text-sky-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Virtual Agent Active 24/7
                  </div>
                </div>
              </div>
              <button 
                onClick={resetDemo}
                className="text-xs text-sky-100 hover:text-white flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Demo</span>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none font-medium'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
                  }`}>
                    <p>{m.text}</p>

                    {/* Pricing Breakdown Display */}
                    {m.isPricingTable && (
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                        <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5 text-sky-600" />
                          <span>Clinic Service Pricing Options:</span>
                        </div>
                        <div className="space-y-1.5">
                          {servicePricingList.map((item, pIdx) => (
                            <div key={pIdx} className="flex justify-between items-center p-2 rounded-lg bg-sky-50/70 border border-sky-100 text-[11px]">
                              <span className="font-medium text-slate-800">{item.name}</span>
                              <span className="font-bold text-sky-700">{item.price}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={triggerSlotPickerFromPricing}
                          className="w-full btn-blue-primary justify-center text-xs py-2 mt-2 shadow-sm"
                        >
                          <span>Select a Day & Time Slot</span>
                        </button>
                      </div>
                    )}

                    {/* Standard Options */}
                    {m.options && (
                      <div className="mt-2.5 space-y-1.5">
                        {m.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="w-full text-left p-2 rounded-lg bg-sky-50/80 hover:bg-sky-100 text-sky-800 font-medium border border-sky-200/60 transition-colors text-[11px]"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Day & Time Slot Picker */}
                    {m.isSlotPicker && bookingStep === 'choosing_day' && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-sky-600" />
                          <span>Select your preferred day and time:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {availableSlots.map((slot, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleSelectSlot(slot)}
                              className="p-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-left font-medium transition-transform active:scale-95"
                            >
                              <div className="text-[10px] opacity-90">{slot.day}</div>
                              <div className="text-[11px] font-bold">{slot.time}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Email Verification Form */}
                    {m.isVerificationForm && bookingStep === 'entering_details' && (
                      <form onSubmit={handleVerificationSubmit} className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                        <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-sky-600" />
                          <span>Enter details for email verification:</span>
                        </div>
                        <input
                          required
                          type="text"
                          placeholder="Your Full Name"
                          value={userDetails.name}
                          onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <input
                          required
                          type="email"
                          placeholder="Your Email Address"
                          value={userDetails.email}
                          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <button
                          type="submit"
                          className="w-full btn-blue-primary justify-center text-xs py-1.5 shadow-sm"
                        >
                          <span>Send Email Verification & Approve</span>
                        </button>
                      </form>
                    )}

                    {/* Confirmed Badge */}
                    {m.isConfirmedBadge && (
                      <div className="mt-2.5 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-[11px] space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Booking Reserved & Email Verification Dispatched</span>
                        </div>
                        <div className="text-slate-600 text-[10px] pt-1">
                          Verification email sent to <strong>{m.email}</strong> to approve consultation for <strong>{m.slot.day} at {m.slot.time}</strong>.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-400 text-xs w-max flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-200"></span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmitMsg} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about clinic pricing or request an appointment..."
                className="flex-1 bg-slate-100 px-3.5 py-2 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button type="submit" className="p-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

          {/* Right: Trusted Clinic Superpowers (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Virtual Agent Superpowers</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Instant Pricing Transparency</div>
                    <div className="text-slate-600 mt-0.5">Answers service pricing questions instantly to qualify interested leads.</div>
                  </div>
                </div>

                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Day & Time Selection</div>
                    <div className="text-slate-600 mt-0.5">Asks visitors for their preferred consultation slot directly inside chat.</div>
                  </div>
                </div>

                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Verification Dispatch</div>
                    <div className="text-slate-600 mt-0.5">Dispatches verification email to approve the booking reservation.</div>
                  </div>
                </div>
              </div>

              {bookingStep === 'confirmed' && selectedDayTime && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Booking Reserved!</span>
                  </div>
                  <div>Slot: {selectedDayTime.day} at {selectedDayTime.time}</div>
                  <div className="text-[10px] text-emerald-800">Verification email sent to {userDetails.email}</div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
