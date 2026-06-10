import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import { sendMessage } from '../services/api';
import { Toaster, toast } from 'react-hot-toast';

function Home() {
  // Single welcome message - no duplicate
  const [messages, setMessages] = useState([
    {
      id: 'welcome-001',
      role: 'bot',
      content: "Hello! Welcome to Pizza Palace! 🍕 I'm your AI assistant — here to help with our menu, orders, delivery info, deals, and more. What can I get started for you today?",
      timestamp: new Date()
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const conversationHistoryRef = useRef([]);

  // Auto-scroll only when messages change, not on loading
  useEffect(() => {
    if (!isLoading) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    
    // Update conversation history
    conversationHistoryRef.current.push({ role: 'user', content: trimmed });
    
    setIsLoading(true);

    try {
      // Send full conversation history to API
      const data = await sendMessage(trimmed, conversationHistoryRef.current);
      const reply = data.response || "Thanks for your message! How else can I help?";
      
      // Update conversation history with bot response
      conversationHistoryRef.current.push({ role: 'assistant', content: reply });
      
      const botMsg = {
        id: `bot-${Date.now()}`,
        role: 'bot',
        content: reply,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      // Removed success toast to prevent spam
    } catch (error) {
      toast.error('Failed to connect to server. Please try again.');
      const errorMsg = {
        id: `err-${Date.now()}`,
        role: 'bot',
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChipClick = (chipText) => {
    handleSend(chipText);
  };

  const handleClearChat = () => {
    setMessages([{
      id: 'welcome-001',
      role: 'bot',
      content: "Chat cleared! How can I help you today?",
      timestamp: new Date()
    }]);
    conversationHistoryRef.current = [];
    toast.success('Chat cleared successfully');
  };

  const handleExportChat = () => {
    const exportData = {
      exportedAt: new Date(),
      messages: messages,
      totalMessages: messages.length
    };
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `pizza-palace-chat-${Date.now()}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    toast.success('Chat exported successfully');
  };

  // Fixed: Remove last user+bot message pair
  const handleDeleteLastMessage = () => {
    if (messages.length <= 1) {
      toast.error('Cannot delete welcome message');
      return;
    }
    
    // Remove last two messages (user + bot) if they exist
    let newMessages = [...messages];
    const lastMessage = newMessages[newMessages.length - 1];
    
    if (lastMessage.role === 'user') {
      newMessages = newMessages.slice(0, -1);
      conversationHistoryRef.current = conversationHistoryRef.current.slice(0, -1);
    } else if (lastMessage.role === 'bot') {
      // If last is bot, remove both bot and previous user
      newMessages = newMessages.slice(0, -2);
      conversationHistoryRef.current = conversationHistoryRef.current.slice(0, -2);
    }
    
    setMessages(newMessages);
    toast.success('Last message deleted');
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-custom">
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 3000,
          style: {
            background: '#162038',
            color: '#fff',
            border: '1px solid #2a3560'
          }
        }}
      />
      <Header 
        onClearChat={handleClearChat} 
        onExportChat={handleExportChat}
        onDeleteLastMessage={handleDeleteLastMessage}
      />
      <ChatWindow 
        messages={messages} 
        isLoading={isLoading}
        onChipClick={handleChipClick}
        messagesEndRef={messagesEndRef}
      />
      <ChatInput 
        onSend={handleSend} 
        isLoading={isLoading}
      />
    </div>
  );
}

export default Home;