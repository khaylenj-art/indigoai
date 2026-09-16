import React, { useState } from 'react';
import { Bot, Calendar, CheckCircle2, Send, Clock, Sparkles, User, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CoreFunctionChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! Welcome to our website. I am your 24/7 AI assistant. How can I help you today?",
      options: [
        "What services do you offer?",
        "How much does a project cost?",
        "Book a consultation appointment"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableSlots = [
    { day: 'Tomorrow', time: '10:00 AM' },
    { day: 'Tomorrow', time: '02:30 PM' },
    { day: 'Thursday', time: '11:00 AM' }
  ];

  const handleOptionClick = (text) => {
    addMessage('user', text);
    processReply(text);
  };

  const handleSubmit = (e) => {
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

      if (lower.includes('book') || lower.includes('appointment') || lower.includes('consultation')) {
        addMessage('bot', "I can schedule a consultation call directly with our team. Please choose a date and time slot below:", { isCalendar: true });
      } else if (lower.includes('cost') || lower.includes('price')) {
        addMessage('bot', "Our service packages are tailored to your business needs. Would you like to select a time slot to discuss custom pricing?", {
          options: ["Book a consultation appointment", "What services do you offer?"]
        });
      } else {
        addMessage('bot', "We provide end-to-end solutions designed for high-growth businesses. Would you like to schedule a quick 15-minute call?", { isCalendar: true });
      }
    }, 500);
  };

  const confirmSlot = (slot) => {
    setSelectedTime(slot);
    setBookingConfirmed(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}

    addMessage('bot', `Your appointment has been confirmed for ${slot.day} at ${slot.time}. A calendar invitation has been dispatched to your email.`, {
      isConfirmation: true
    });
  };

  const resetDemo = () => {
    setBookingConfirmed(false);
    setSelectedTime(null);
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: "Hello! Welcome to our website. I am your 24/7 AI assistant. How can I help you today?",
        options: [
          "What services do you offer?",
          "How much does a project cost?",
          "Book a consultation appointment"
        ]
      }
    ]);
  };

  return (
    <section id="chatbot-booking" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Function 1 Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Core Function 1</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-1">
            24/7 Web Chatbot & Automatic Calendar Bookings
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Responds to every website visitor instantly, answers questions, and locks appointments directly into your calendar without human intervention.
          </p>
        </div>

        {/* Clean Side-by-Side Showcase Card */}
        <div className="bg-sky-50/50 rounded-3xl p-6 md:p-10 border border-sky-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Chatbot Interface (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md flex flex-col h-[500px] overflow-hidden">
            
            {/* Header */}
            <div className="p-4 bg-sky-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">24/7 AI Web Receptionist</div>
                  <div className="text-[11px] text-sky-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active on your website
                  </div>
                </div>
              </div>
              <button 
                onClick={resetDemo}
                className="text-xs text-sky-100 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-1 rounded transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none font-medium'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
                  }`}>
                    <p>{m.text}</p>

                    {/* Options */}
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

                    {/* Calendar Slot Picker */}
                    {m.isCalendar && !bookingConfirmed && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-semibold text-slate-700 mb-2 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-sky-600" />
                          Select available time slot:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                          {availableSlots.map((slot, idx) => (
                            <button
                              key={idx}
                              onClick={() => confirmSlot(slot)}
                              className="p-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-center font-medium transition-transform active:scale-95"
                            >
                              <div className="text-[10px] opacity-90">{slot.day}</div>
                              <div className="text-[11px] font-bold">{slot.time}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Confirmation Badge */}
                    {m.isConfirmation && (
                      <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center gap-2 text-[11px]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Calendar sync completed automatically.</span>
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
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a message or ask to book..."
                className="flex-1 bg-slate-100 px-3.5 py-2 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button type="submit" className="p-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

          {/* Right: Booking Process Diagram (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>How Automatic Booking Works</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Website Engagement</div>
                    <div className="text-slate-600 mt-0.5">Visitor asks about services or scheduling a call.</div>
                  </div>
                </div>

                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Real-Time Calendar Sync</div>
                    <div className="text-slate-600 mt-0.5">Bot displays open slots directly inside the chat.</div>
                  </div>
                </div>

                <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Instant Calendar Invite</div>
                    <div className="text-slate-600 mt-0.5">Appointment is created in your calendar and invite is sent.</div>
                  </div>
                </div>
              </div>

              {bookingConfirmed && selectedTime && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Live Booking Confirmed!</span>
                  </div>
                  <div>Slot: {selectedTime.day} at {selectedTime.time}</div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
