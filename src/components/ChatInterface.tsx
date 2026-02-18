import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatInterface.css';

interface ChatInterfaceProps {
  onSendMessage: (message: string) => void;
  isActive: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSendMessage, isActive }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isActive) return;

    setChatHistory([...chatHistory, { role: 'user', content: message }]);
    onSendMessage(message);
    
    // TODO: Replace with your Telegram bot integration
    // Example:
    // const response = await fetch('YOUR_BOT_API_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message })
    // });
    // const data = await response.json();
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: 'Response from JARVIS AI (connect your Telegram bot here)' 
      }]);
    }, 3000);

    setMessage('');
  };

  return (
    <div className="chat-interface">
      {/* Chat History */}
      <div className="chat-history">
        <AnimatePresence>
          {chatHistory.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`message ${msg.role}`}
            >
              <div className="message-content">{msg.content}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Speak to JARVIS..."
            disabled={isActive}
            className="chat-input"
          />
          <button 
            type="submit" 
            disabled={isActive || !message.trim()}
            className="send-button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Status Indicator */}
        <div className="status-bar">
          <div className={`status-dot ${isActive ? 'active' : ''}`}></div>
          <span>{isActive ? 'JARVIS is responding...' : 'Ready'}</span>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;