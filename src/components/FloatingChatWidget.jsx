import React, { useState } from 'react';
import { Bot, X, Send, Calendar, ArrowRight } from 'lucide-react';

export default function FloatingChatWidget({ onOpenBookModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! Would you like to test our 24/7 AI chatbot assistant or schedule a strategy consultation?",
      options: [
        "How fast can you set this up?",
        "How much does Indigo AI cost?",
        "Schedule a strategy call"
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
    respondAi(text);
  };

  const handleOption = (opt) => {
    addUserMsg(opt);
    respondAi(opt);
  };

  const addUserMsg = (text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text }]);
  };

  const respondAi = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const lower = text.toLowerCase();
      let reply = { id: Date.now() + 1, sender: 'bot' };

      if (lower.includes('fast') || lower.includes('setup')) {
        reply.text = "We deploy your custom AI-powered website in under 48 hours, fully trained on your business documents and synced to your calendar.";
        reply.options = ["Schedule a strategy call", "What integrations do you support?"];
      } else if (lower.includes('cost') || lower.includes('price')) {
        reply.text = "Our packages start from $1,490 for complete website redesign + 24/7 AI Receptionist setup. Most clients recover their investment in week one.";
        reply.options = ["Schedule a strategy call", "How fast can you set this up?"];
      } else {
        reply.text = "You can lock in a 1-on-1 strategy call with our team below:";
        reply.showCta = true;
      }

      setMessages((prev) => [...prev, reply]);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-blue-primary p-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center gap-2.5"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-sky-600 animate-pulse"></span>
          </div>
          <span className="font-semibold text-xs hidden sm:inline">Test AI Chatbot</span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[360px] h-[480px] bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-sky-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs">Indigo AI Assistant</h4>
                <div className="text-[10px] text-sky-100">Responds in 0.4s • 24/7</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
            {messages.map((m) => (
              <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-sky-600 text-white rounded-br-none font-medium'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
                }`}>
                  <p>{m.text}</p>

                  {m.options && (
                    <div className="mt-2 space-y-1">
                      {m.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOption(opt)}
                          className="w-full text-left p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 font-medium transition-colors border border-sky-200/60 text-[11px]"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {m.showCta && (
                    <button
                      onClick={() => { setIsOpen(false); onOpenBookModal(); }}
                      className="mt-2.5 w-full btn-blue-primary justify-center text-xs py-2 px-3"
                    >
                      <span>Schedule Strategy Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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

          {/* Form */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button type="submit" className="p-2 rounded-full bg-sky-600 text-white hover:bg-sky-700">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
