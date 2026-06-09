import React from 'react';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import { FaPizzaSlice, FaMotorcycle, FaTag, FaClock, FaStar, FaTruck, FaPhoneAlt, FaGift } from 'react-icons/fa';
import { GiRobotGolem } from 'react-icons/gi';

function ChatWindow({ messages, isLoading, onChipClick, messagesEndRef }) {
  // Fixed: Only show welcome screen when only welcome message exists (not duplicate)
  const showWelcomeScreen = messages.length === 1 && messages[0].role === 'bot' && messages[0].id === 'welcome-001';

  const quickActions = [
    { icon: FaPizzaSlice, text: "Menu", action: "Show me the full menu please", color: "text-orange-400" },
    { icon: FaMotorcycle, text: "Delivery", action: "Tell me about delivery options", color: "text-green-400" },
    { icon: FaTag, text: "Deals", action: "What are today's special deals?", color: "text-yellow-400" },
    { icon: FaClock, text: "Hours", action: "What are your opening hours?", color: "text-blue-400" },
    { icon: FaStar, text: "Popular", action: "What are your most popular pizzas?", color: "text-purple-400" },
    { icon: FaTruck, text: "Track", action: "How can I track my order?", color: "text-cyan-400" },
    { icon: FaPhoneAlt, text: "Contact", action: "What's your contact number?", color: "text-pink-400" },
    { icon: FaGift, text: "Coupons", action: "Do you have any active coupons?", color: "text-emerald-400" }
  ];

  return (
    <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 md:px-6 sm:py-6 scrollbar-thin bg-gradient-to-b from-[#0A1128] to-[#0D1730]">
      <div className="max-w-4xl mx-auto">
        {showWelcomeScreen ? (
          <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 animate-fadeIn">
            {/* Robot Icon */}
            <div className="relative mb-4 sm:mb-5 md:mb-6">
              <div className="absolute inset-0 bg-[#2563EB] rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full ring-2 ring-[#2563EB] ring-offset-2 ring-offset-[#0A1128] bg-gradient-to-br from-[#162038] to-[#1a2340] flex items-center justify-center">
                <GiRobotGolem className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#2563EB] animate-float" />
              </div>
            </div>
            
            {/* Welcome Text */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 bg-gradient-to-r from-white to-[#2563EB] bg-clip-text text-transparent px-4">
              Welcome to Pizza Palace!
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] text-center mb-5 sm:mb-6 max-w-[280px] sm:max-w-md">
              Ask me about our menu, hours, delivery, or anything else!
            </p>
            
            {/* Responsive Chips Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-2.5 px-3 max-w-md sm:max-w-3xl">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => onChipClick(action.action)}
                  className="group flex items-center justify-center gap-2 bg-[#1a2340] border border-[#2a3560] rounded-full px-3 py-2 sm:px-4 sm:py-2 hover:border-[#2563EB] transition-all duration-300 hover:scale-105"
                >
                  <action.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${action.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-[#94a3b8] group-hover:text-white text-xs sm:text-sm font-medium transition-colors">
                    {action.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Messages only when not on welcome screen
          <div className="space-y-3 sm:space-y-4">
            {messages.map((msg, index) => (
              <ChatBubble key={msg.id} message={msg} index={index} />
            ))}
          </div>
        )}
        
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} className="h-2 sm:h-4" />
      </div>
    </div>
  );
}

export default ChatWindow;