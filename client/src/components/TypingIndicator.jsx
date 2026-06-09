import React from 'react';
import { FaRobot } from 'react-icons/fa';

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 mb-4 animate-slideInLeft">
      <div className="w-8 h-8 rounded-full flex-shrink-0 self-end ring-2 ring-[#2563EB] bg-[#162038] flex items-center justify-center shadow-md">
        <FaRobot className="w-4 h-4 text-[#2563EB]" />
      </div>
      <div className="bg-[#162038] border border-[#2a3560] px-5 py-3 rounded-2xl rounded-bl-sm shadow-md">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-[#2563EB] rounded-full animate-bounce-dot" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2.5 h-2.5 bg-[#2563EB] rounded-full animate-bounce-dot" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2.5 h-2.5 bg-[#2563EB] rounded-full animate-bounce-dot" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;