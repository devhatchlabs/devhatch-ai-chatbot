// import React, { useState } from 'react';
// import { FaUser, FaRobot, FaCopy, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import { toast } from 'react-hot-toast';

// function formatTime(date) {
//   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// }

// function ChatBubble({ message, index }) {
//   const isUser = message.role === 'user'; // Fixed: Now consistent with Home.jsx
//   const [liked, setLiked] = useState(false);
//   const [disliked, setDisliked] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(message.content);
//     toast.success('Copied to clipboard!');
//   };

//   const handleLike = () => {
//     setLiked(!liked);
//     if (disliked) setDisliked(false);
//     toast.success(liked ? 'Like removed' : 'Thanks for your feedback!');
//   };

//   const handleDislike = () => {
//     setDisliked(!disliked);
//     if (liked) setLiked(false);
//     toast.success(disliked ? 'Feedback removed' : 'Sorry to hear that!');
//   };

//   if (isUser) {
//     return (
//       <div className="flex justify-end mb-4 animate-slideInRight" style={{ animationDelay: `${index * 50}ms` }}>
//         <div className="flex flex-col items-end max-w-[85%] sm:max-w-[70%] md:max-w-[60%]">
//           <div className="message-gradient-user text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-sm shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all duration-300">
//             <p className="break-words whitespace-pre-wrap">{message.content}</p>
//           </div>
//           <div className="flex items-center gap-2 mt-1">
//             <span className="text-[#6b7280] text-[10px]">
//               {formatTime(message.timestamp)}
//             </span>
//             <button 
//               onClick={handleCopy} 
//               className="text-[#4b5563] hover:text-[#2563EB] transition-colors"
//               title="Copy message"
//             >
//               <FaCopy className="w-3 h-3" />
//             </button>
//           </div>
//         </div>
//         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex-shrink-0 self-end ml-2 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
//           <FaUser className="w-4 h-4 text-white" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-end gap-3 mb-4 animate-slideInLeft" style={{ animationDelay: `${index * 50}ms` }}>
//       <div className="w-8 h-8 rounded-full flex-shrink-0 self-end ring-2 ring-[#2563EB] bg-[#162038] flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
//         <FaRobot className="w-4 h-4 text-[#2563EB]" />
//       </div>
//       <div className="flex flex-col items-start max-w-[85%] sm:max-w-[70%] md:max-w-[60%]">
//         <div className="message-gradient-bot text-[#e2e8f0] text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-sm shadow-md border border-[#2a3560] hover:shadow-lg transition-all duration-300">
//           <p className="break-words whitespace-pre-wrap">{message.content}</p>
//         </div>
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[#6b7280] text-[10px]">
//             {formatTime(message.timestamp)}
//           </span>
//           <div className="flex items-center gap-1">
//             <button 
//               onClick={handleLike}
//               className={`transition-all duration-300 hover:scale-110 ${liked ? 'text-green-500' : 'text-[#4b5563] hover:text-green-500'}`}
//               title="Helpful"
//             >
//               <FaThumbsUp className="w-3 h-3" />
//             </button>
//             <button 
//               onClick={handleDislike}
//               className={`transition-all duration-300 hover:scale-110 ${disliked ? 'text-red-500' : 'text-[#4b5563] hover:text-red-500'}`}
//               title="Not helpful"
//             >
//               <FaThumbsDown className="w-3 h-3" />
//             </button>
//             <button 
//               onClick={handleCopy}
//               className="text-[#4b5563] hover:text-[#2563EB] transition-colors hover:scale-110"
//               title="Copy message"
//             >
//               <FaCopy className="w-3 h-3" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatBubble;
import React, { useState } from 'react';
import { FaUser, FaCopy, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import logo from '/logo.png';

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function ChatBubble({ message, index }) {
  const isUser = message.role === 'user';
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    toast.success('Copied to clipboard!');
  };

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
    toast.success(liked ? 'Like removed' : 'Thanks for your feedback!');
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
    toast.success(disliked ? 'Feedback removed' : 'Sorry to hear that!');
  };

  if (isUser) {
    return (
      <div className="flex justify-end mb-4 animate-slideInRight" style={{ animationDelay: `${index * 50}ms` }}>
        <div className="flex flex-col items-end max-w-[85%] sm:max-w-[70%] md:max-w-[60%]">
          <div className="message-gradient-user text-white text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-br-sm shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all duration-300">
            <p className="break-words whitespace-pre-wrap">{message.content}</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#6b7280] text-[10px]">
              {formatTime(message.timestamp)}
            </span>
            <button 
              onClick={handleCopy} 
              className="text-[#4b5563] hover:text-[#2563EB] transition-colors"
              title="Copy message"
            >
              <FaCopy className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex-shrink-0 self-end ml-2 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
          <FaUser className="w-4 h-4 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-3 mb-4 animate-slideInLeft" style={{ animationDelay: `${index * 50}ms` }}>
      <div className="w-8 h-8 rounded-full flex-shrink-0 self-end ring-2 ring-[#2563EB] bg-[#162038] flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
        <img src={logo} alt="Bot" className="w-4 h-4 object-contain" />
      </div>
      <div className="flex flex-col items-start max-w-[85%] sm:max-w-[70%] md:max-w-[60%]">
        <div className="message-gradient-bot text-[#e2e8f0] text-sm leading-relaxed px-4 py-3 rounded-2xl rounded-bl-sm shadow-md border border-[#2a3560] hover:shadow-lg transition-all duration-300">
          <p className="break-words whitespace-pre-wrap">{message.content}</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[#6b7280] text-[10px]">
            {formatTime(message.timestamp)}
          </span>
          <div className="flex items-center gap-1">
            <button 
              onClick={handleLike}
              className={`transition-all duration-300 hover:scale-110 ${liked ? 'text-green-500' : 'text-[#4b5563] hover:text-green-500'}`}
              title="Helpful"
            >
              <FaThumbsUp className="w-3 h-3" />
            </button>
            <button 
              onClick={handleDislike}
              className={`transition-all duration-300 hover:scale-110 ${disliked ? 'text-red-500' : 'text-[#4b5563] hover:text-red-500'}`}
              title="Not helpful"
            >
              <FaThumbsDown className="w-3 h-3" />
            </button>
            <button 
              onClick={handleCopy}
              className="text-[#4b5563] hover:text-[#2563EB] transition-colors hover:scale-110"
              title="Copy message"
            >
              <FaCopy className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;