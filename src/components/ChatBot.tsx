import { useState } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ChatMessage } from '@/types/ride';
import { cn } from '@/lib/utils';

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'bot',
    content: 'Hi! 👋 I\'m your RideCompare assistant. I can help you find the best ride. What would you like to do?',
    timestamp: new Date(),
    quickReplies: ['Find cheapest ride', 'Find fastest ride', 'Set price alert'],
  },
];

const botResponses: Record<string, { message: string; quickReplies?: string[] }> = {
  'Find cheapest ride': {
    message: 'Great choice! To find the cheapest ride, I\'ll need your locations. Please enter your pickup and drop locations in the search form, and I\'ll highlight the best deal for you! 💰',
    quickReplies: ['Go to search', 'Set price alert'],
  },
  'Find fastest ride': {
    message: 'Speed is key! ⚡ Enter your pickup and drop locations in the search form. I\'ll show you the ride with the shortest ETA.',
    quickReplies: ['Go to search', 'Find cheapest ride'],
  },
  'Set price alert': {
    message: 'Smart! 🔔 I can notify you when prices drop. First, search for your route, then I\'ll help you set up an alert for when a cheaper option becomes available.',
    quickReplies: ['Go to search', 'How do alerts work?'],
  },
  'Go to search': {
    message: 'Just fill in your pickup and drop locations in the search form above, then click "Compare Prices". I\'ll be here if you need help! 🚗',
  },
  'How do alerts work?': {
    message: 'Price alerts work in the background. When surge pricing drops or a better deal appears, you\'ll get a notification. It\'s like having a personal ride-price tracker! 📱',
    quickReplies: ['Set price alert', 'Find cheapest ride'],
  },
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  
  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[messageText] || {
        message: 'I can help you find the best ride! Try asking me to find the cheapest or fastest option, or set up a price alert. 🚗',
        quickReplies: ['Find cheapest ride', 'Find fastest ride', 'Set price alert'],
      };
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: response.message,
        timestamp: new Date(),
        quickReplies: response.quickReplies,
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };
  
  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
          isOpen && "rotate-0"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
      
      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-secondary/50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-semibold">RideCompare Bot</div>
            <div className="text-xs text-muted-foreground">Always online</div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-2",
                  msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  msg.role === 'user' ? 'bg-primary' : 'bg-secondary'
                )}>
                  {msg.role === 'user' ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div className={cn(
                  "max-w-[75%] space-y-2",
                  msg.role === 'user' && 'text-right'
                )}>
                  <div className={cn(
                    "inline-block rounded-2xl px-4 py-2 text-sm",
                    msg.role === 'user'
                      ? 'rounded-tr-sm bg-primary text-primary-foreground'
                      : 'rounded-tl-sm bg-secondary'
                  )}>
                    {msg.content}
                  </div>
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-2">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleSend(reply)}
                          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary transition-colors hover:bg-primary/20"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Input */}
        <div className="border-t border-border p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="h-10"
            />
            <Button type="submit" size="icon" className="h-10 w-10 shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
