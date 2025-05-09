
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Mervine's digital assistant. Ask me anything about Mervine's work, skills, or interests!",
      sender: 'bot'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('tech') || lowerQuestion.includes('technology') || lowerQuestion.includes('stack')) {
      return "Mervine enjoys working with modern JavaScript frameworks like React and Node.js. She's also skilled in MongoDB, SQL databases, and has experience with Docker and cloud technologies. She loves learning new technologies that help solve real-world problems efficiently!";
    } else if (lowerQuestion.includes('teamwork') || lowerQuestion.includes('team')) {
      return "Mervine believes teamwork is essential for creating great software. She values open communication, knowledge sharing, and collaborative problem-solving. From her experience, diverse perspectives always lead to better solutions!";
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('favorite project')) {
      return "While Mervine enjoys all her projects, she's particularly proud of her full-stack applications that solve real user problems. Check out the Projects section to see her latest work featuring React, Node.js, and various databases!";
    } else if (lowerQuestion.includes('language') || lowerQuestion.includes('languages') || lowerQuestion.includes('speak')) {
      return "Mervine is fluent in English and French, and she's currently learning German. Her multilingual skills help her collaborate with diverse teams and contribute to international projects!";
    } else if (lowerQuestion.includes('teaching') || lowerQuestion.includes('mentor')) {
      return "Mervine is passionate about teaching and mentoring. She's been a teaching assistant for programming courses, loves explaining complex concepts like OOP in simple terms, and even runs a choir training program. She believes in making knowledge accessible to everyone!";
    } else if (lowerQuestion.includes('hobby') || lowerQuestion.includes('interest') || lowerQuestion.includes('free time')) {
      return "Outside of coding, Mervine enjoys glute/abs workouts, snacking on salted peanuts, and is actively involved in faith-based community work. She's also passionate about music leadership!";
    } else {
      return "That's a great question! Mervine is a Computer Engineering graduate and Full Stack Developer who's passionate about building meaningful digital experiences. Feel free to ask about her tech stack, projects, teaching experience, or personal interests!";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: userInput,
      sender: 'user' as const
    };
    
    setMessages([...messages, newUserMessage]);
    setUserInput('');
    setIsTyping(true);
    
    // Simulate typing delay then add bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(userInput);
      const newBotMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot' as const
      };
      
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  return (
    <div className={`chat-widget fixed bottom-4 right-4 z-40 ${isChatOpen ? '' : 'closed'}`}>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary-dark transition-all z-50"
        aria-label="Toggle chat"
      >
        {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 h-[450px] mb-16 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-semibold">Ask Mervine</h3>
            <p className="text-xs opacity-80">Get to know more about Mervine's work and interests</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-message bot typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t p-3 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="ml-2 bg-primary text-white rounded-full p-2 hover:bg-primary-dark"
              disabled={!userInput.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
