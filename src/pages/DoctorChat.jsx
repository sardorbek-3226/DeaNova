import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaPaperPlane, FaArrowLeft, FaVideo } from "react-icons/fa";

export default function DoctorChat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const [isWaiting, setIsWaiting] = useState(false);

  const doctors = [
    { id: 1, name: "Dr. Ali" },
    { id: 2, name: "Dr. Malika" },
    { id: 3, name: "Dr. Rustam" },
    { id: 4, name: "Dr. Dilorom" },
    { id: 5, name: "Dr. Jamshid" },
    { id: 6, name: "Dr. Nargiza" },
    { id: 7, name: "Dr. Bek" },
    { id: 8, name: "Dr. Laylo" },
    { id: 9, name: "Dr. Mahliyo" },
  ];

  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">Doctor topilmadi!</p>
      </div>
    );
  }

  const doctorResponses = [
    "Rahmat, xabar olindi.",
    "Oxirgi 24 soat ichida siz bilan aloqaga chiqaman.",
  ];

  const sendMessage = () => {
    if (!input.trim() || isWaiting) return;

    // Foydalanuvchi xabarini qo'shish
    setMessages((prev) => [...prev, { sender: "You", text: input }]);
    setInput("");
    setIsWaiting(true);

    // 1-chi xabar darhol
    setMessages((prev) => [
      ...prev,
      { sender: doctor.name, text: doctorResponses[0] },
    ]);

    // 2-chi xabar 2 soniyadan keyin
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: doctor.name, text: doctorResponses[1] },
      ]);
      setIsWaiting(false);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <div className="flex items-center gap-4 bg-white shadow-md p-4 sticky top-0 z-50">
        <button
          onClick={() => navigate("/doctorConsultation")}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          <FaArrowLeft /> Orqaga
        </button>
        <h1 className="text-xl font-bold text-purple-600">
          Chat with {doctor.name}
        </h1>
      </div>

      {/* Video + Chat */}
      <div className="flex flex-1 flex-col lg:flex-row gap-4 p-4">
        {/* Left: Video */}
        <div className="lg:w-1/2 bg-black rounded-2xl shadow-lg flex items-center justify-center h-96 lg:h-auto relative">
          <FaVideo className="text-white text-6xl animate-pulse" />
          <p className="text-white absolute bottom-4 text-lg">
            Video Chat Area
          </p>
        </div>

        {/* Right: Chat */}
        <div className="lg:w-1/2 flex flex-col bg-white rounded-2xl shadow-lg p-4">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto space-y-4 flex flex-col mb-4">
            {messages.length === 0 && (
              <p className="text-gray-400 text-center mt-20 text-lg">
                Salom! Xabar yozing...
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] p-3 rounded-2xl break-words shadow-md ${
                  msg.sender === "You"
                    ? "self-end bg-purple-600 text-white"
                    : "self-start bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                isWaiting ? "Doktor javobini kuting..." : "Xabar yozing..."
              }
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
              disabled={isWaiting}
            />
            <button
              onClick={sendMessage}
              className={`bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition ${
                isWaiting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isWaiting}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
