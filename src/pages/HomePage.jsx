import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaComments, FaVideo, FaAppleAlt, FaStar } from "react-icons/fa";

export default function HomePage() {
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
      name: "Diabet nazorati ",
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


      {/* Asosiy kontent */}
      <main className="flex-1 p-6 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-bold text-purple-600 text-center tracking-wider">
  DiaNova platformasi!
</h2>

        {/* Doktorlar showcase */}
        <div className="w-full max-w-6xl">
          <h3 className="text-2xl font-semibold italic text-purple-600 mb-6 text-center">
          Sog'ligingizni biz bilan nazorat qiling!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white flex flex-col gap-1">
                  <h4 className="text-xl font-bold">{doc.name}</h4>
                  <p className="text-sm">{doc.specialization}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{doc.rating}</span>
                    <span className="text-gray-200 text-sm">({doc.reviews} sharh)</span>
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
