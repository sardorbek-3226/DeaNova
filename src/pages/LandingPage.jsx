import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaSyringe, FaCalendarAlt, FaClock, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

export default function LandingPage() {
const navigate = useNavigate();

return ( <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col items-center justify-center px-4 py-10">
{/* Logo + App Name */} <div className="flex flex-col items-center mb-10"> <h1 className="text-4xl font-bold text-purple-600 mb-2">DiaNova</h1> <p className="text-gray-700 text-center mb-2 text-lg"> Sog‘lom hayot uchun ishonchli hamrohingiz</p> <p className="text-gray-500 text-center mb-1"> Diabetni nazorat qiling, hayotdan zavqlaning!</p> <p className="text-gray-500 text-center text-sm">Har kun yangi imkoniyat!</p> </div>

```
  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <FaChartLine className="text-purple-500 text-4xl mb-2" />
      <h3 className="font-semibold mb-1">Qand Nazorati</h3>
      <p className="text-gray-500 text-sm">Qon shakarini kuzatish</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <FaSyringe className="text-purple-500 text-4xl mb-2" />
      <h3 className="font-semibold mb-1">Insulin Rejasi</h3>
      <p className="text-gray-500 text-sm">Kunlik insulin hisob-kitob</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <FaCalendarAlt className="text-purple-500 text-4xl mb-2" />
      <h3 className="font-semibold mb-1">Ovqat Jadvali</h3>
      <p className="text-gray-500 text-sm">NB tizimi va dieta stoli</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <FaClock className="text-purple-500 text-4xl mb-2" />
      <h3 className="font-semibold mb-1">Kunlik Tartib</h3>
      <p className="text-gray-500 text-sm">Vaqt jadvaliga rioya qilish</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <FaAppleAlt className="text-purple-500 text-4xl mb-2" />
      <h3 className="font-semibold mb-1">Sog‘lom Ovqat</h3>
      <p className="text-gray-500 text-sm">Yaxshi ovqatlanish bo‘yicha maslahatlar</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
      <FaHeartbeat className="text-purple-500 text-4xl mb-2" />
      <h3 className="font-semibold mb-1">Sog‘liq Hisoboti</h3>
      <p className="text-gray-500 text-sm">Kunlik sog‘liq monitoringi</p>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
    <button
      onClick={() => navigate("/register")}
      className="w-full sm:w-auto flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition"
    >
       Ro‘yxatdan o‘tish
    </button>
    <button
      onClick={() => navigate("/login")} // Kirish tugmasi login sahifasiga olib o‘tadi
      className="w-full sm:w-auto flex-1 py-3 border border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition"
    >
       Kirish
    </button>
  </div>
</div>


);
}
