
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
    
    if (lowerQuestion.includes('hire') || lowerQuestion.includes('available') || lowerQuestion.includes('work')) {
      return "Yes! Mervine is actively looking for opportunities in Full Stack Development. She's passionate about creating meaningful digital experiences and would love to discuss how her skills can contribute to your team. Feel free to reach out through the contact section!";
    } else if (lowerQuestion.includes('tech') || lowerQuestion.includes('technology') || lowerQuestion.includes('stack') || lowerQuestion.includes('skills')) {
      return "Mervine's tech stack includes React.js, Node.js, MongoDB, SQL databases, Docker, and various cloud technologies. She's currently working on projects with modern frameworks and loves learning new technologies that solve real-world problems efficiently!";
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('work')) {
      return "Mervine has built several impressive projects including MIRA (AI Academic Assistant), a BAUCF Choir Management Web App, GD Pastries online store, and ExpenseMate budgeting assistant. Each project showcases her full-stack capabilities and problem-solving skills!";
    } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('background')) {
      return "Mervine is a Computer Engineering graduate from Cyprus International University. She has experience as a Teaching Assistant at Birmingham City University and Northeastern University, plus hands-on development experience. She's passionate about both teaching and building software!";
    } else if (lowerQuestion.includes('language') || lowerQuestion.includes('speak')) {
      return "Mervine is multilingual - fluent in English and French, currently learning German. This helps her collaborate effectively with international teams and contribute to diverse project environments!";
    } else if (lowerQuestion.includes('teaching') || lowerQuestion.includes('mentor') || lowerQuestion.includes('education')) {
      return "Mervine loves teaching! She's been a Teaching Assistant for programming courses, specializes in making complex concepts like OOP accessible, and runs choir training programs. She believes in empowering others through knowledge sharing!";
    } else if (lowerQuestion.includes('hobby') || lowerQuestion.includes('interest') || lowerQuestion.includes('personal')) {
      return "Outside coding, Mervine enjoys fitness (especially glute/abs workouts), music leadership in her community, and faith-based activities. She's also known for her love of salted peanuts! 🥜";
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach')) {
      return "You can reach Mervine through the contact form on this website, or connect with her on LinkedIn and other social platforms. She's always open to discussing new opportunities and collaborations!";
    } else if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Mervine's work, skills, and experience. What would you like to know about her?";
    } else {
      return "That's an interesting question! Mervine is a passionate Full Stack Developer and Computer Engineering graduate who loves building meaningful digital solutions. Ask me about her projects, technical skills, teaching experience, availability for work, or personal interests!";
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
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-white ml-4'
                      : 'bg-gray-100 text-gray-800 mr-4'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
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
