
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Chat } from "@google/genai";
import { projects } from '../constants.ts';
import { ChatIcon, SendIcon, XIcon, BotIcon } from './Icons.tsx';

// A simple markdown to HTML converter for bot responses
const MarkdownRenderer = ({ content }: { content: string }) => {
    // Basic markdown for bold and newlines.
    const html = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\n/g, '<br />'); // New lines

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [ai, setAi] = useState<GoogleGenAI | null>(null);

  useEffect(() => {
    // Only initialize and render the chatbot if the API key is provided
    if (process.env.API_KEY) {
        setAi(new GoogleGenAI({ apiKey: process.env.API_KEY }));
    }
  }, []);
  
  const projectSummaries = projects.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n');

  useEffect(() => {
    if (isOpen && ai) {
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are a helpful portfolio assistant for Riya Bhismire, a UI/UX designer and VFX artist. Be friendly, concise, and helpful. You know about her projects. Here is a summary:\n${projectSummaries}\n\nDo not make up information. If you don't know, say you don't know. Keep responses short and to the point.`,
          },
        });
        setChat(newChat);
        setMessages([
          { sender: 'bot', text: "Hi there! I'm Riya's portfolio assistant. Ask me about her projects or skills!" }
        ]);
    } else {
        setChat(null);
        setMessages([]);
    }
  }, [isOpen, ai]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !chat) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await chat.sendMessageStream({ message: inputValue });
      
      let botResponse = '';
      setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

      for await (const chunk of result) {
        botResponse += chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            // Update the last message which is the bot's streaming response
            if(newMessages.length > 0) {
                newMessages[newMessages.length - 1].text = botResponse;
            }
            return newMessages;
        });
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages.length > 0 && newMessages[newMessages.length - 1].sender === 'bot') {
            newMessages.pop(); // Remove empty bot message placeholder
        }
        return [...newMessages, { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' }];
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const ChatBubble = ({ message }: { message: Message }) => {
    const isBot = message.sender === 'bot';
    return (
      <div className={`flex items-start gap-3 my-3 ${isBot ? '' : 'flex-row-reverse'}`}>
        {isBot && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-teal)] flex items-center justify-center text-black">
                <BotIcon />
            </div>
        )}
        <div className={`px-4 py-2 rounded-lg max-w-xs md:max-w-md text-white ${isBot ? 'bg-slate-700' : 'bg-[var(--accent-blue)]'}`}>
            <MarkdownRenderer content={message.text} />
        </div>
      </div>
    );
  };
  
  if (!ai) {
    return null; // Don't render anything if there is no API key
  }
  
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[60vh] max-h-[700px] z-40 bg-[var(--bg-mid)] rounded-xl shadow-2xl flex flex-col"
            style={{ boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}
            aria-modal="true"
            role="dialog"
          >
            <header className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="text-lg font-bold font-heading text-[var(--accent-teal)]">Portfolio Assistant</h3>
            </header>
            
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
              {messages.map((msg, index) => <ChatBubble key={index} message={msg} />)}
              {isLoading && (
                  <div className="flex items-start gap-3 my-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-teal)] flex items-center justify-center text-black"><BotIcon /></div>
                      <div className="px-4 py-2 rounded-lg bg-slate-700">
                          <div className="flex items-center justify-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" style={{animationDelay: '0s'}}></span>
                            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" style={{animationDelay: '0.2s'}}></span>
                            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" style={{animationDelay: '0.4s'}}></span>
                          </div>
                      </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my work..."
                  className="w-full px-4 py-2 pr-12 bg-slate-800 border border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] text-white"
                  disabled={isLoading}
                  aria-label="Chat input"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center justify-center w-10 text-[var(--text-light)] hover:text-[var(--accent-teal)] disabled:text-slate-500 disabled:cursor-not-allowed"
                  disabled={isLoading || !inputValue.trim()}
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--accent-magenta)] to-[var(--accent-blue)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        whileHover={{ rotate: 15 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'chat'}
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            {isOpen ? <XIcon /> : <ChatIcon />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Chatbot;