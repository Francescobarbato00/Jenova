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
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const handleSendMessage = (question) => {
    setMessages([...messages, { text: question, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your question! We'll get back to you soon.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div>
      {/* Bottone Chatbot sempre visibile */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbot Fullscreen Overlay */}
      {isOpen && (
        <div className="chatbot-overlay fixed inset-0 z-50 bg-white flex flex-col animate-fadeIn">
          {/* Intestazione */}
          <div className="header flex justify-between items-center p-4 bg-blue-600 text-white">
            <span className="font-bold">Chat with us</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messaggi */}
          <div className="messages p-4 flex-1 overflow-y-auto flex flex-col space-y-3">
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
            <div ref={messagesEndRef}></div>
          </div>

          {/* Domande Preimpostate */}
          <div className="predefined p-4 bg-gray-100 border-t">
            <span className="block text-gray-700 mb-2 font-semibold">
              Quick Questions:
            </span>
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

      {/* Animazione apertura */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        /* Responsività: per schermi piccoli il layout rimane full screen */
        @media (max-width: 768px) {
          .chatbot-overlay {
            /* L'overlay copre l'intero schermo già grazie a fixed inset-0 */
          }
        }
      `}</style>
    </div>
  );
}
