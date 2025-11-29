import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaHome,
  FaComments,
  FaVideo,
  FaAppleAlt,
  FaStar,
  FaBars,
  FaTimes,
  FaClock,
} from "react-icons/fa";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const doctors = [
    {
      name: "Qand miqdorini o'lchovchi qurilma",
      image: "./aparat.jpg",
      rating: 4.9,
      reviews: 150,
    },
    {
      name: "Mahsulotlar monitoringi",
      image: "./meva.jpg",
      rating: 4.7,
      reviews: 110,
    },
    {
      name: "Diabet nazorati",
      image: "./ukol.jpg",
      rating: 4.85,
      reviews: 130,
    },
    {
      name: "Insulin inyeksiyalari",
      image: "./insulin.jpg",
      rating: 4.75,
      reviews: 105,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold text-purple-600">DiaNova</h1>

    {/* Hamburger icon */}
    <div className="sm:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes className="text-2xl text-purple-600" />
        ) : (
          <FaBars className="text-2xl text-purple-600" />
        )}
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
      <Link to="/premium" className="flex flex-col items-center text-purple-600 hover:text-purple-800">
        <FaStar className="text-2xl" />
        <span className="text-sm">Premium</span>
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
      <Link to="/premium" className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
        <FaStar /> Premium
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


      {/* Asosiy kontent */}
      <main className="flex-1 p-4 sm:p-6 flex flex-col items-center gap-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 text-center tracking-wider">
          DiaNova platformasi!
        </h2>

        {/* Showcase */}
        <div className="w-full max-w-6xl">
          <h3 className="text-2xl sm:text-3xl font-semibold italic text-purple-600 mb-6 text-center">
            Sog'ligingizni biz bilan nazorat qiling!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white flex flex-col gap-1">
                  <h4 className="text-lg sm:text-xl font-bold">{doc.name}</h4>
                  <div className="flex items-center gap-1 text-sm sm:text-base">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{doc.rating}</span>
                    <span className="text-gray-200">({doc.reviews} sharh)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outlet: nested routes */}
        <div className="w-full mt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
