import React, { useState } from "react";
import { FaAppleAlt, FaComments, FaHome, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔥 YouTube linklaring shu yerda bo'ladi
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

  // 👉 Linkdan video ID ajratib olamiz
  const getVideoId = (url) => {
    const match = url.match(/(?:v=|\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <>
          <nav className="bg-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-50">
  <h1 className="text-2xl font-bold text-purple-600">DiaNova</h1>
  <div className="flex gap-6 items-center">
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

    {/* Chiqish tugmasi */}
    <Link 
      to="/" 
      className="ml-4 px-4 py-2 bg-[#6E11B0] text-white rounded-lg hover:#6E11B0 transition"
    >
      Chiqish
    </Link>
  </div>
</nav>

    <div className="max-w-6xl mx-auto pt-24 px-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        Video Ma'lumotlar
      </h1>

      {/* ===== PLAYER ===== */}
      {selectedVideo && (
        <div className="mb-6">
          <iframe
            className="w-full h-96 rounded-xl shadow-lg"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube player"
            allowFullScreen
          ></iframe>

          <button
            onClick={() => setSelectedVideo(null)}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Yopish
          </button>
        </div>
      )}

      {/* ===== VIDEO LIST ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => {
          const id = getVideoId(video.url);
          return (
            <div
              key={index}
              onClick={() => setSelectedVideo(id)}
              className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 font-semibold text-gray-800">
                {video.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
