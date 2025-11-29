import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DoctorConsultation() {
  const navigate = useNavigate();

  const doctors = [
    { id: 1, name: "Dr. Ali", experience: 10, avatar: "./ALI.jpg" },
    { id: 2, name: "Dr. Malika", experience: 8, avatar: "./malika.jpg" },
    { id: 3, name: "Dr. Rustam", experience: 12, avatar: "./jamshid.jpg" },
    { id: 4, name: "Dr. Dilorom", experience: 7, avatar: "./azi.jpg" },
    { id: 5, name: "Dr. Jamshid", experience: 15, avatar: "./nodir.jpg" },
    { id: 6, name: "Dr. Nargiza", experience: 9, avatar: "./madi.jpg" },
    { id: 7, name: "Dr. Bek", experience: 11, avatar: "./jama.jpg" },
    { id: 8, name: "Dr. Laylo", experience: 6, avatar: "./rayxon.jpg" },
    { id: 9, name: "Dr. Mahliyo", experience: 14, avatar: "./mahliyo.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      {/* Orqaga tugma */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/premium")}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
         <FaArrowLeft /> Orqaga
        </button>
      </div>

      <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        Premium Doctor Consultation
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-3xl shadow-xl flex flex-col items-center hover:scale-105 hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/doctorChat/${doc.id}`)}
          >
            <img
              src={doc.avatar}
              alt={doc.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
            <h2 className="mt-4 font-semibold text-lg text-center text-purple-800">{doc.name}</h2>
            <p className="text-gray-600 mt-1 text-center text-sm">Malakali doktor</p>
            <p className="text-gray-500 mt-1 text-center text-sm">Staj: {doc.experience} yil</p>
          </div>
        ))}
      </div>
    </div>
  );
}
