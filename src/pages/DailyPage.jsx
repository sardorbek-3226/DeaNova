import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaComments, FaVideo, FaAppleAlt, FaStar, FaBars, FaTimes, FaClock } from "react-icons/fa";
export default function DailyPage() {
  const [calories, setCalories] = useState(null);
  const [aiRoutine, setAiRoutine] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cal = localStorage.getItem("dailyCalories");
    if (cal) setCalories(cal);
  }, []);

  const generateRoutine = async () => {
    if (!calories) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer YOUR_API_KEY`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `I ate food worth ${calories} calories.
                Create a short daily routine:
                - recommended calories for today
                - meal plan (breakfast/lunch/dinner)
                - water schedule
                - light workout
                Keep it safe and simple.`
            }
          ]
        })
      });

      const data = await response.json();
      setAiRoutine(data.choices[0].message.content);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
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
        <Link to="/daily" className="flex flex-col items-center text-purple-600 hover:text-purple-800">
          <FaClock className="text-2xl" />
          <span className="text-sm">Daily</span>
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
    <div className="p-4">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">AI Daily Routine</h1>

      {!calories && <p>Avval ChatBotda rasmni analiz qiling.</p>}

      {calories && (
        <div>
          <p className="text-lg mb-4">
            Bugungi iste'mol qilingan kaloriyalar:{" "}
            <span className="font-bold text-purple-600">{calories} kcal</span>
          </p>

          <button
            onClick={generateRoutine}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            {loading ? "AI hisoblamoqda..." : "AI Tavsiya Yaratish"}
          </button>

          {aiRoutine && (
            <div className="mt-6 p-4 border bg-purple-50 rounded-lg">
              <h2 className="text-xl font-bold mb-2">AI Tavsiya:</h2>
              <pre className="whitespace-pre-wrap">{aiRoutine}</pre>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
}
