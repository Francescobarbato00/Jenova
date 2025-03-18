import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);

  const predefinedQuestions = [
    "What services do you offer?",
    "How can I contact support?",
    "Do you provide cloud solutions?",
    "Tell me more about your IT consulting.",
  ];

  // Riferimento all'ultimo messaggio per lo scrolling automatico
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (question) => {
    setMessages([...messages, { text: question, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your question! We'll get back to you soon.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div>
      {/* Bottone Chatbot */}
      <button
        className="chatbot-button fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="chatbot-box fixed bottom-16 right-6 w-80 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden animate-fadeIn">
          {/* Intestazione */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <span className="font-bold">Chat with us</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messaggi con Auto-Scroll */}
          <div className="p-4 h-64 overflow-y-auto flex flex-col space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-200 self-start"
                    : "bg-blue-500 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {/* Ref per l'auto-scroll */}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Domande Preimpostate */}
          <div className="p-4 bg-gray-100 border-t">
            <span className="block text-gray-700 mb-2 font-semibold">Quick Questions:</span>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="text-blue-600 text-sm border border-blue-500 px-3 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition"
                  onClick={() => handleSendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Animazione apertura e stili specifici */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        /* Modifiche per mobile: full screen per il chatbot e icona sopra tutto */
        @media (max-width: 768px) {
          .chatbot-box {
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            border: none;
            box-shadow: none;
          }
          .chatbot-box > .bg-blue-600 {
            /* Intestazione su mobile con padding maggiore se necessario */
            padding: 1rem;
          }
          .chatbot-button {
            z-index: 9999;
          }
        }
      `}</style>
    </div>
  );
}
