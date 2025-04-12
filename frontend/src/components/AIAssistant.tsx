import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Clock, Check, CheckCheck, Sparkles, BookOpen, HelpCircle, Settings as SettingsIcon } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface AIAssistantProps {
  onClick?: () => void;
}

const AIAssistant = ({ onClick }: AIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Add welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: "Hello! I'm your AI assistant. How can I help you today?",
        isUser: false,
        timestamp: new Date(),
      }]);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg === newMessage ? { ...msg, status: 'delivered' } : msg
      ));
    }, 500);

    // Simulate AI typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        text: "I'm here to help! How can I assist you today?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 2000);
  };

  const quickActions = [
    { icon: <BookOpen size={16} />, label: 'Help with lessons' },
    { icon: <HelpCircle size={16} />, label: 'Ask a question' },
    { icon: <Sparkles size={16} />, label: 'Get suggestions' },
    { icon: <SettingsIcon size={16} />, label: 'Settings help' },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <span className="font-medium">AI Assistant</span>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {isTyping ? 'Typing...' : 'Online'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
                >
                  {action.icon}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex flex-col">
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-jeel-blue text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className={`flex items-center gap-1 mt-1 text-xs ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}>
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">
                      {formatTime(message.timestamp)}
                    </span>
                    {message.isUser && message.status && (
                      <>
                        {message.status === 'sent' && <Check size={12} className="text-gray-400" />}
                        {message.status === 'delivered' && <CheckCheck size={12} className="text-gray-400" />}
                        {message.status === 'read' && <CheckCheck size={12} className="text-jeel-blue" />}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent"
              />
              <button
                type="submit"
                className="p-2 bg-jeel-blue text-white rounded-lg hover:bg-jeel-blue/90 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* AI Assistant Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative h-16 w-16 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="AI Assistant"
      >
        {/* Avatar Face */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
        </div>

        {/* Pulsing Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-jeel-blue to-jeel-purple opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDuration: '2s' }} />

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-jeel-blue to-jeel-purple opacity-0 group-hover:opacity-20 blur-md" />
      </button>
    </div>
  );
};

export default AIAssistant; 