
import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';

function ChatInput({ onSend, isLoading }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-[#1e2d4a] p-3 sm:p-4 bg-gradient-to-t from-[#0A1128] to-transparent safe-bottom">
      <div className="max-w-4xl mx-auto">
        {/* Input Bar - Only chat input and send button */}
        <div className="flex items-center gap-2 bg-[#1a2340] border border-[#2a3560] rounded-2xl px-3 py-1.5 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20 transition-all duration-300">
          {/* Text Input */}
          <textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder:text-[#4b5563] outline-none disabled:opacity-50 resize-none py-2 max-h-24"
            style={{ overflow: 'auto' }}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!text.trim() || isLoading}
            className="w-9 h-9 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40"
            title="Send message"
          >
            <IoSend className="w-4 h-4 text-white" />
          </button>
        </div>
        
        {/* Helper Text */}
        <div className="text-[#4b5563] text-[10px] text-center mt-2">
          Press Enter to send • Shift + Enter for new line
        </div>
      </div>
    </div>
  );
}

export default ChatInput;