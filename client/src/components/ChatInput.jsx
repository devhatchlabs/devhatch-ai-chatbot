import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { MdMic, MdMicNone, MdAttachFile, MdClose, MdImage } from 'react-icons/md';
import { BsEmojiSmile } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

function ChatInput({ onSend, isLoading }) {
  const [text, setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed && !selectedFile) {
      toast.error('Please type a message or select an image');
      return;
    }
    if (trimmed) onSend(trimmed);
    setText('');
    if (selectedFile) {
      toast.success('Image attached!');
      setSelectedFile(null);
      setFilePreview(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      setIsRecording(true);
      recognition.start();
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setText(transcript);
        setIsRecording(false);
        toast.success('Voice input captured!');
      };
      
      recognition.onerror = () => {
        setIsRecording(false);
        toast.error('Voice recognition failed');
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };
    } else {
      toast.error('Voice recognition not supported in this browser');
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image too large (max 5MB)');
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setFilePreview(reader.result);
      reader.readAsDataURL(file);
      toast.success('Image attached! Click send to share');
    } else {
      toast.error('Please select an image file');
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    toast.success('Image removed');
  };

  const commonEmojis = ['😊', '😂', '❤️', '👍', '🍕', '🎉', '🔥', '✨', '😍', '🥺'];

  return (
    <div className="border-t border-[#1e2d4a] p-3 sm:p-4 bg-gradient-to-t from-[#0A1128] to-transparent safe-bottom">
      <div className="max-w-4xl mx-auto relative">
        {/* File Preview */}
        {filePreview && (
          <div className="mb-2 p-2 bg-[#1a2340] rounded-xl border border-[#2a3560] flex items-center gap-2 animate-fadeIn">
            <img src={filePreview} alt="Preview" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs truncate">{selectedFile?.name}</p>
              <p className="text-[#6b7280] text-[10px]">{(selectedFile?.size / 1024).toFixed(1)} KB</p>
            </div>
            <button onClick={removeFile} className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors">
              <MdClose className="w-4 h-4 text-red-400" />
            </button>
          </div>
        )}

        {/* Input Bar */}
        <div className="flex items-end gap-2 bg-[#1a2340] border border-[#2a3560] rounded-2xl px-2 py-1.5 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20 transition-all duration-300">
          {/* Emoji Picker */}
          <div className="relative">
            <button 
              onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
              className="hidden sm:flex w-9 h-9 rounded-xl hover:bg-[#2563EB] transition-all items-center justify-center"
            >
              <BsEmojiSmile className="w-4 h-4 text-[#94a3b8] hover:text-white transition-colors" />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-full left-0 mb-2 p-2 bg-[#162038] border border-[#2a3560] rounded-xl shadow-xl animate-fadeIn z-50">
                <div className="grid grid-cols-5 gap-1">
                  {commonEmojis.map((emoji, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => { 
                        setText(text + emoji); 
                        setShowEmojiPicker(false);
                        inputRef.current?.focus();
                      }} 
                      className="w-8 h-8 hover:bg-[#2563EB] rounded-lg transition-colors text-lg"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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

          {/* File Button */}
          <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
          <button 
            onClick={() => fileInputRef.current?.click()} 
            className="hidden sm:flex w-9 h-9 rounded-xl hover:bg-[#2563EB] transition-all items-center justify-center group"
            title="Attach image"
          >
            <MdAttachFile className="w-4 h-4 text-[#94a3b8] group-hover:text-white transition-colors rotate-45" />
          </button>

          {/* Voice Button */}
          <button 
            onClick={handleVoiceInput} 
            className={`hidden sm:flex w-9 h-9 rounded-xl transition-all items-center justify-center ${isRecording ? 'bg-red-500 animate-pulse' : 'hover:bg-[#2563EB]'}`}
            title="Voice input"
          >
            {isRecording ? <MdMic className="w-4 h-4 text-white" /> : <MdMicNone className="w-4 h-4 text-[#94a3b8] hover:text-white transition-colors" />}
          </button>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={(!text.trim() && !selectedFile) || isLoading}
            className="w-9 h-9 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40"
            title="Send message"
          >
            <IoSend className="w-4 h-4 text-white" />
          </button>
        </div>
        
        {/* Helper Text */}
        <div className="text-[#4b5563] text-[10px] text-center mt-2">
          <span>Press Enter to send</span>
          <span className="mx-2">•</span>
          <span>Shift + Enter for new line</span>
          {isRecording && <span className="ml-2 text-red-400 animate-pulse">🔴 Recording...</span>}
        </div>
      </div>
    </div>
  );
}

export default ChatInput;