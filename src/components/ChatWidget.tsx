
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
    
    if (lowerQuestion.includes('graduate') || lowerQuestion.includes('university') || lowerQuestion.includes('school') || lowerQuestion.includes('degree')) {
      return "Mervine graduated from Cyprus International University with a Computer Engineering degree (2020-2025). She's passionate about both the theoretical foundations and practical applications of computer science!";
    } else if (lowerQuestion.includes('hire') || lowerQuestion.includes('available') || lowerQuestion.includes('job') || lowerQuestion.includes('position')) {
      return "Yes! Mervine is actively seeking Full Stack Developer opportunities. She's eager to contribute to meaningful projects and would love to discuss how her skills can benefit your team. Check out the contact section to get in touch!";
    } else if (lowerQuestion.includes('tech') || lowerQuestion.includes('technology') || lowerQuestion.includes('stack') || lowerQuestion.includes('programming') || lowerQuestion.includes('code')) {
      return "Mervine's technical expertise includes React.js, Node.js, MongoDB, SQL databases, Python, Docker, and cloud technologies. She enjoys working with modern JavaScript frameworks and is always eager to learn new tools that solve problems efficiently!";
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('built') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('work')) {
      return "Mervine has created some impressive projects: MIRA (AI Academic Assistant using OpenAI API), BAUCF Choir Management Web App, GD Pastries online store with Stripe integration, and ExpenseMate budgeting assistant. Each showcases her full-stack development skills!";
    } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('background') || lowerQuestion.includes('career')) {
      return "Mervine has diverse experience as a Teaching Assistant at Birmingham City University and Northeastern University, plus hands-on development work. She's taught programming concepts and helped students understand complex topics like OOP!";
    } else if (lowerQuestion.includes('language') || lowerQuestion.includes('speak') || lowerQuestion.includes('multilingual')) {
      return "Mervine speaks English and French fluently, and she's currently learning German. Her multilingual abilities help her collaborate effectively with international teams and diverse project environments!";
    } else if (lowerQuestion.includes('teaching') || lowerQuestion.includes('mentor') || lowerQuestion.includes('education') || lowerQuestion.includes('assistant')) {
      return "Mervine loves teaching! She's been a Teaching Assistant for programming courses at both Birmingham City University and Northeastern University. She excels at breaking down complex concepts like Object-Oriented Programming into understandable pieces!";
    } else if (lowerQuestion.includes('hobby') || lowerQuestion.includes('interest') || lowerQuestion.includes('personal') || lowerQuestion.includes('free time')) {
      return "Outside of coding, Mervine enjoys fitness workouts (especially glute/abs training), music leadership in her faith community, and her famous love for salted peanuts! 🥜 She believes in maintaining a healthy work-life balance!";
    } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email') || lowerQuestion.includes('connect')) {
      return "You can reach Mervine through the contact form on this website, connect with her on LinkedIn, or check out her GitHub. She's always open to discussing new opportunities, collaborations, or just having a chat about tech!";
    } else if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey') || lowerQuestion.includes('good')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Mervine's work, skills, and experience. What specific aspect would you like to know about?";
    } else if (lowerQuestion.includes('age') || lowerQuestion.includes('old') || lowerQuestion.includes('young')) {
      return "Mervine is a young professional who recently completed her Computer Engineering degree. She brings fresh perspectives and enthusiasm to every project she works on!";
    } else if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('based') || lowerQuestion.includes('live')) {
      return "Mervine has international experience, having studied in Cyprus and worked as a Teaching Assistant in the UK and US. She's flexible with location and open to both remote and on-site opportunities!";
    } else {
      return "That's an interesting question! I'd love to help you learn more about Mervine. You can ask me about her education, technical skills, projects, teaching experience, availability for work, personal interests, or how to contact her. What would you like to know?";
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
