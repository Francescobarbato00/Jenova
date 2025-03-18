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

  // Blocca lo scroll del body quando il chatbot è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          <div className="header bg-blue-600 text-white p-4 flex justify-between items-center">
            <span className="font-bold">Chat with us</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messaggi con Auto-Scroll */}
          <div className="messages p-4 h-64 overflow-y-auto flex flex-col space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-200 self-start text-black"
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
          <div className="predefined p-4 bg-gray-100 border-t">
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

      {/* Animazione apertura e stili */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        /* Entrambi (icona e box) sovrappongono tutto */
        .chatbot-button, .chatbot-box {
          z-index: 9999;
        }
        /* Versione Desktop mantiene il layout standard */
        
        /* Versione Mobile: chatbot in full screen */
        @media (max-width: 768px) {
          .chatbot-box {
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            border: none;
            box-shadow: none;
            display: flex;
            flex-direction: column;
          }
          /* Regola l'altezza dell'area messaggi in mobile */
          .chatbot-box .messages {
            height: calc(100vh - 120px);
          }
          /* Assicura che l'intestazione rimanga visibile in cima */
          .chatbot-box .header {
            position: relative;
            z-index: 10000;
          }
        }
      `}</style>
    </div>
  );
}
