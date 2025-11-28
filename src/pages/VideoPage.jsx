import React, { useState } from "react";
import { FaAppleAlt, FaBars, FaComments, FaHome, FaTimes, FaVideo,  } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VideoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔥 YouTube linklari
  const videos = [
    {
      title: "Contour plus one - Apparatidan qanday foydalaniladi?",
      url: "https://youtube.com/watch?v=dXaB3TLSAdA&si=5mUcoJIfKJSD0_ID",
    },
    {
      title: "Teri orasiga ukol qilish!",
      url: "https://youtu.be/tW1TJMjcdiI",
    },
    {
      title: "Ineksiya qilish uchun insulin miqdori qanday o‘lchanadi?",
      url: "https://youtu.be/gHBcUTeu_z8",
    },
  ];

  // YouTube linkidan ID olish
  const getVideoId = (url) => {
    const match = url.match(/(?:v=|\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
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

      <div className="max-w-6xl mx-auto pt-24 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-6 text-center sm:text-left">
          Video Ma'lumotlar
        </h1>

        {/* Video Player */}
        {selectedVideo && (
          <div className="mb-6">
            <iframe
              className="w-full h-96 sm:h-[500px] rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube player"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Yopish
            </button>
          </div>
        )}

        {/* Video List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const id = getVideoId(video.url);
            return (
              <div
                key={index}
                onClick={() => setSelectedVideo(id)}
                className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition transform duration-200"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 font-semibold text-gray-800 text-sm sm:text-base">
                  {video.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
