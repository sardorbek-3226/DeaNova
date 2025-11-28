import React, { useState, useRef, useEffect } from "react";
import { FaUpload, FaPaperPlane, FaHome, FaComments, FaVideo, FaAppleAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// 🔥 NAVBAR COMPONENT
function ChatBotNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-purple-600">DiaNova</h1>

      {/* Hamburger icon */}
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-2xl text-purple-600" /> : <FaBars className="text-2xl text-purple-600" />}
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:flex gap-6 items-center">
        <Link to="/home" className="flex flex-col items-center text-purple-600 hover:text-purple-800">
          <FaHome className="text-2xl" />
          <span className="text-sm">Bosh sahifa</span>
        </Link>
        <Link to="/chatbot" className="flex flex-col items-center text-purple-600 hover:text-purple-800">
          <FaComments className="text-2xl" />
          <span className="text-sm">ChatBot</span>
        </Link>
        <Link to="/video" className="flex flex-col items-center text-purple-600 hover:text-purple-800">
          <FaVideo className="text-2xl" />
          <span className="text-sm">Video</span>
        </Link>
        <Link to="/products" className="flex flex-col items-center text-purple-600 hover:text-purple-800">
          <FaAppleAlt className="text-2xl" />
          <span className="text-sm">Mahsulotlar</span>
        </Link>
        <Link 
          to="/" 
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Chiqish
        </Link>
      </div>
    </div>

    {/* Mobile menu */}
    {menuOpen && (
      <div className="sm:hidden flex flex-col gap-4 bg-white p-4 border-t border-gray-200">
        <Link to="/home" className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
          <FaHome /> Bosh sahifa
        </Link>
        <Link to="/chatbot" className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
          <FaComments /> ChatBot
        </Link>
        <Link to="/video" className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
          <FaVideo /> Video
        </Link>
        <Link to="/products" className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
          <FaAppleAlt /> Mahsulotlar
        </Link>
        <Link 
          to="/" 
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Chiqish
        </Link>
      </div>
    )}
  </nav>
  );
}

export default function ChatBotPage() {
  const [image, setImage] = useState(null);
  const [advice, setAdvice] = useState([]);
  const [message, setMessage] = useState("");
  const [nutrition, setNutrition] = useState(null);
  const chatEndRef = useRef(null);

  const getRandomNutrition = () => ({
    calories: Math.floor(Math.random() * 500) + 100,
    protein: (Math.random() * 20 + 5).toFixed(1),
    fat: (Math.random() * 15 + 2).toFixed(1),
    carbs: (Math.random() * 60 + 10).toFixed(1),
  });

  const handleImageSubmit = () => {
    if (!image) return;
    const newNutrition = getRandomNutrition();
    setNutrition(newNutrition);

    const adviceList = [
      `Ovqat kaloriyasi: ${newNutrition.calories} kcal`,
      `Protein miqdori: ${newNutrition.protein} g`,
      `Yog‘ miqdori: ${newNutrition.fat} g`,
      `Uglevod: ${newNutrition.carbs} g`,
      "AI Tavsiya: Ovqat tarkibini balanslash uchun maslahatlar quyida.",
    ];

    setAdvice((prev) => [...prev, ...adviceList]);
  };

  const aiSuggestions = [
    "Ko‘proq sabzavot iste’mol qiling",
    "Proteinni oshiring (go‘sht, tuxum, sut mahsulotlari)",
    "Yog‘ni kamaytirish tavsiya etiladi",
    "Uglevodlarni me’yorda iste’mol qiling",
    "Suv ichishni unutmang",
    "Kichik porsiyalarni tez-tez iste’mol qiling",
    "Meva va yong‘oqlar qo‘shing",
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const shuffled = aiSuggestions.sort(() => 0.5 - Math.random());
    const aiMsg = shuffled.slice(0, Math.floor(Math.random() * 3) + 1);

    setAdvice((prev) => [
      ...prev,
      `Siz: ${message}`,
      ...aiMsg.map((msg) => `AI: ${msg}`),
    ]);

    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [advice]);

  return (
    <>
      {/* NAVBAR */}
      <ChatBotNavbar />

      {/* PAGE CONTENT */}
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col sm:flex-row p-4 sm:p-6 gap-6 pt-28">

        {/* LEFT SIDE — CHAT */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4 text-center sm:text-left">
            AI ChatBot 🧠
          </h2>

          {/* CHAT BOX */}
          <div className="flex-1 bg-purple-50 rounded p-3 sm:p-4 mb-4 overflow-y-auto space-y-2 max-h-80 sm:max-h-[400px]">
            {advice.length === 0 ? (
              <p className="text-gray-400 text-sm sm:text-base">Rasm tanlang yoki savol yozing...</p>
            ) : (
              advice.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded text-sm sm:text-base ${
                    msg.startsWith("AI:") || msg.startsWith("Ovqat")
                      ? "bg-purple-100 text-purple-800 self-start"
                      : "bg-white text-gray-800 self-end"
                  } shadow`}
                >
                  {msg}
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          {/* INPUT */}
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Savol yozing..."
              className="flex-1 border rounded-xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
            />
            <button
              onClick={handleSendMessage}
              className="bg-purple-600 text-white p-2 sm:p-3 rounded-xl hover:bg-purple-700 transition"
            >
              <FaPaperPlane className="text-sm sm:text-base" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE + NUTRITION */}
        <div className="flex-1 flex flex-col items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full flex flex-col items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer bg-purple-50 p-2 sm:p-3 rounded shadow hover:bg-purple-100 transition text-sm sm:text-base">
              <FaUpload className="text-purple-600" />
              <span>{image ? "Rasm tanlandi" : "Rasm tanlash"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />
            </label>

            <button
              onClick={handleImageSubmit}
              className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-purple-700 transition text-sm sm:text-base"
            >
              Tekshirish
            </button>
          </div>

          {image && nutrition && (
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full flex flex-col items-center gap-4 transform transition duration-500 hover:scale-105">
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="w-full sm:w-72 h-44 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-purple-600 font-bold text-lg">Tavsiya:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
                  <li>Kaloriya: {nutrition.calories} kcal</li>
                  <li>Protein: {nutrition.protein} g</li>
                  <li>Yog‘: {nutrition.fat} g</li>
                  <li>Uglevod: {nutrition.carbs} g</li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
