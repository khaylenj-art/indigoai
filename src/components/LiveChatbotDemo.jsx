import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, User, Calendar, CheckCircle2, Clock, Send, Sparkles, 
  ChevronRight, RefreshCw, Zap, Shield, ArrowUpRight, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveChatbotDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Welcome to Apex Luxe Architecture! I'm Indigo AI, your 24/7 assistant. How can I help you design your dream space today?",
      timestamp: 'Just now',
      options: [
        "What services do you offer?",
        "Can I get a custom price estimate?",
        "Book a consultation call"
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null); // null, 'selecting', 'confirmed'
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [metrics, setMetrics] = useState({
    responseTime: '0.38s',
    leadsProcessed: 142,
    conversionRate: '88%'
  });

  const chatEndRef = useRef(null);

  const availableSlots = [
    { day: 'Tomorrow', time: '10:00 AM' },
    { day: 'Tomorrow', time: '02:30 PM' },
    { day: 'Thursday', time: '11:00 AM' },
    { day: 'Friday', time: '04:00 PM' }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  const handleOptionClick = (optionText) => {
    addUserMessage(optionText);
    processAiResponse(optionText);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal;
    setInputVal('');
    addUserMessage(text);
    processAiResponse(text);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text: text,
        timestamp: 'Just now'
      }
    ]);
  };

  const processAiResponse = (userText) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = userText.toLowerCase();

      let botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        timestamp: 'Just now'
      };

      if (lower.includes('book') || lower.includes('consultation') || lower.includes('appointment')) {
        botReply.text = "I'd be delighted to arrange a 1-on-1 discovery consultation with our senior architectural lead! Here are our real-time available slots:";
        botReply.isCalendarWidget = true;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('estimate')) {
        botReply.text = "Our architectural packages range from $3,500 for full concept designs up to comprehensive luxury builds. Would you like me to book a quick 15-minute scoping call to get you an exact quote?";
        botReply.options = ["Yes, show calendar slots", "What's included in concept designs?"];
      } else if (lower.includes('service') || lower.includes('offer')) {
        botReply.text = "We specialize in Residential Architecture, Interior Spatial Design, and Commercial Renovations. Would you like to view our portfolio or lock in a consultation call?";
        botReply.options = ["Book a consultation call", "View pricing packages"];
      } else {
        botReply.text = "Thanks for your inquiry! Indigo AI handles questions, qualifies project requirements, and books client appointments instantly 24/7. Would you like to select a calendar slot right now?";
        botReply.isCalendarWidget = true;
      }

      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  const confirmBooking = (slot) => {
    setSelectedSlot(slot);
    setBookingStatus('confirmed');
    triggerConfetti();

    // Add confirmed message to chat
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'bot',
        text: `🎉 Excellent! Your consultation is locked in for ${slot.day} at ${slot.time}. A calendar invite & SMS reminder have been automatically sent to your calendar!`,
        timestamp: 'Just now',
        isConfirmationBadge: true,
        slotDetails: slot
      }
    ]);
  };

  const resetChat = () => {
    setBookingStatus(null);
    setSelectedSlot(null);
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: "👋 Welcome to Apex Luxe Architecture! I'm Indigo AI, your 24/7 assistant. How can I help you design your dream space today?",
        timestamp: 'Just now',
        options: [
          "What services do you offer?",
          "Can I get a custom price estimate?",
          "Book a consultation call"
        ]
      }
    ]);
  };

  return (
    <section id="live-demo" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Demonstration</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Watch Indigo AI handle inquiries & book calendar slots in real-time.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Interact with the simulated website assistant below. Test asking a question, choosing a service, or booking a consultation appointment.
          </p>
        </div>

        {/* Main Side-by-Side Showcase Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Simulated Website Canvas & Chatbot Window (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden">
            
            {/* Mock Browser Header */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>

              {/* URL Address Bar */}
              <div className="bg-white px-4 py-1 rounded-md text-xs font-mono text-slate-600 border border-slate-200 flex items-center gap-2 max-w-xs w-full justify-center shadow-inner">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span>https://apexluxe-architecture.com</span>
              </div>

              <button 
                onClick={resetChat} 
                className="text-slate-500 hover:text-slate-800 text-xs flex items-center gap-1 bg-slate-200/60 hover:bg-slate-200 px-2 py-1 rounded transition-colors"
                title="Reset Demonstration"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Demo</span>
              </button>
            </div>

            {/* Mock Website Canvas Body */}
            <div className="relative min-h-[540px] bg-slate-950 text-white flex flex-col justify-between overflow-hidden">
              
              {/* Background Mock Website Visual */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              {/* Mock Website Navbar */}
              <div className="p-6 flex items-center justify-between border-b border-slate-800/80 z-10">
                <div className="font-bold tracking-wider text-xl text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  APEX LUXE ARCHITECTURE
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs text-slate-400 font-medium">
                  <span>Portfolio</span>
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Mock Website Hero Content (Behind Chat Window) */}
              <div className="p-8 max-w-lg z-10">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Award-Winning Spatial Design</span>
                <h3 className="text-2xl font-bold mt-2 text-slate-100">Modern Architecture for Visionary Spaces</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Crafting bespoke residential and commercial masterpieces with precision and elegance.
                </p>
              </div>

              {/* FLOATING ACTIVE INDIGO CHATBOT WIDGET OVERLAY */}
              <div className="absolute bottom-4 right-4 w-full sm:w-[410px] max-h-[500px] h-[480px] bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-20 transition-all duration-300">
                
                {/* Chat Widget Header */}
                <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-white border border-white/30">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-blue-600"></span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-1.5">
                        Indigo AI Receptionist
                        <span className="px-1.5 py-0.2 bg-white/20 rounded text-[10px]">24/7</span>
                      </div>
                      <div className="text-[11px] text-blue-100 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-300 fill-amber-300" />
                        <span>Responds in 0.4s • Auto-Bookings</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages Body */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 text-xs">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div className="flex items-end gap-2 max-w-[85%]">
                        {msg.sender === 'bot' && (
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mb-1">
                            AI
                          </div>
                        )}

                        <div 
                          className={`p-3.5 rounded-2xl leading-relaxed shadow-sm ${
                            msg.sender === 'user'
                              ? 'bg-blue-600 text-white rounded-br-xs font-medium'
                              : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.text}</p>

                          {/* Render Embedded Interactive Calendar Widget inside chat */}
                          {msg.isCalendarWidget && bookingStatus !== 'confirmed' && (
                            <div className="mt-3 pt-3 border-t border-slate-100">
                              <div className="text-[11px] font-semibold text-slate-700 mb-2 flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                Select an available slot:
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {availableSlots.map((slot, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => confirmBooking(slot)}
                                    className="p-2 rounded-lg bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200/80 text-blue-700 transition-all text-left group flex flex-col justify-between"
                                  >
                                    <span className="font-semibold text-[11px]">{slot.day}</span>
                                    <span className="text-[10px] opacity-80">{slot.time}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Render Options Chips */}
                          {msg.options && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {msg.options.map((opt, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleOptionClick(opt)}
                                  className="px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:border-blue-300 text-slate-700 hover:text-blue-700 border border-slate-200 text-[11px] transition-all font-medium text-left"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Render Confirmation Badge */}
                          {msg.isConfirmationBadge && (
                            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[11px] flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="font-bold">Google Calendar Sync Complete</div>
                                <div className="text-[10px] text-emerald-700 mt-0.5">
                                  Confirmation invite dispatched to client email & SMS.
                                </div>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                        AI
                      </div>
                      <div className="bg-white px-3 py-2 rounded-2xl border border-slate-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-150"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-300"></span>
                      </div>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input Field */}
                <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 rounded-b-2xl flex items-center gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type a question or ask to book..."
                    className="flex-1 bg-slate-100 px-3.5 py-2 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

              </div>

            </div>

          </div>

          {/* Right Column: Real-Time Autonomous Operations Monitor (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Card 1: AI Speed & Status */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200/80 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live AI Metrics</div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Response Latency</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1 flex items-baseline gap-1">
                    {metrics.responseTime}
                    <span className="text-xs text-emerald-600 font-normal">Instant</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Lead Conversion</div>
                  <div className="text-2xl font-bold text-blue-600 mt-1">
                    {metrics.conversionRate}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Real-time Calendar Sync Status */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200/80 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-slate-900 text-sm">Calendar Engine Status</h3>
              </div>

              {bookingStatus === 'confirmed' && selectedSlot ? (
                <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl text-emerald-900 space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>APPOINTMENT BOOKED AUTOMATICALLY</span>
                  </div>
                  <div className="text-xs space-y-1 text-emerald-800 pl-6">
                    <div>📅 <strong>Date:</strong> {selectedSlot.day} @ {selectedSlot.time}</div>
                    <div>👤 <strong>Client:</strong> Verified Web Lead</div>
                    <div>🔗 <strong>Sync:</strong> Google Calendar & CRM</div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-medium text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Waiting for visitor booking...
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Click any calendar slot in the chat window on the left to watch Indigo AI auto-dispatch the invite!
                  </p>
                </div>
              )}
            </div>

            {/* Card 3: Enterprise Integrations Badge */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200/80 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Syncs Seamlessly With</div>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                <div className="p-2 bg-white rounded-lg border border-slate-200/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Google Calendar
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span> Outlook 365
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> HubSpot CRM
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> WhatsApp / SMS
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
