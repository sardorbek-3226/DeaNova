import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
  const navigate = useNavigate();

  // Agar foydalanuvchi allaqachon ro'yxatdan o'tgan bo'lsa, avtomatik LoginPagega yo'naltirish
  useEffect(() => {
    const isRegistered = localStorage.getItem("registered");
    if (isRegistered) {
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    familia: "",
    ism: "",
    sharif: "",
    day: "",
    month: "",
    year: "",
    vazn: "",
    boy: "",
    diabetYil: "",
    insulin: "",
    diabetTuri: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(formData);
    if (values.every((v) => v !== "")) {
      toast.success("Ro‘yxatdan muvaffaqiyatli o‘tildi! Login sahifasiga yo‘naltirilmoqda...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Ro'yxatdan o'tganligini saqlash
      localStorage.setItem("registered", "true");

      setTimeout(() => {
        navigate("/login"); // LoginPagega yo'naltiradi
      }, 2100);
    } else {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col gap-8"
      >
        <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-6">
          Ro‘yxatdan o‘tish
        </h2>

        {/* Shaxsiy ma’lumotlar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <input
            type="text"
            name="familia"
            placeholder="Familiya"
            value={formData.familia}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          />
          <input
            type="text"
            name="ism"
            placeholder="Ism"
            value={formData.ism}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          />
          <input
            type="text"
            name="sharif"
            placeholder="Sharif"
            value={formData.sharif}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          />
        </div>

        {/* Tug‘ilgan sana */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          >
            <option value="">Kun</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          >
            <option value="">Oy</option>
            {["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"].map((m,i) => (
              <option key={i} value={i+1}>{m}</option>
            ))}
          </select>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          >
            <option value="">Yil</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={2025 - i}>{2025 - i}</option>
            ))}
          </select>
        </div>

        {/* Tibbiy ma’lumotlar */}
        <div className="bg-purple-50 p-6 rounded-2xl flex flex-col gap-6">
          <input
            type="number"
            name="vazn"
            placeholder="Vazn (kg)"
            value={formData.vazn}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          />
          <input
            type="number"
            name="boy"
            placeholder="Bo‘y (cm)"
            value={formData.boy}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          />
          <input
            type="number"
            name="diabetYil"
            placeholder="Nechi yildan beri qandli diabet kasalligingiz bor?"
            value={formData.diabetYil}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          />
          <select
            name="diabetTuri"
            value={formData.diabetTuri}
            onChange={handleChange}
            className="border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-md transition"
          >
            <option value="">Diabet turini tanlang</option>
            <option value="1-turi">1-turi</option>
            <option value="2-turi">2-turi</option>
            <option value="gestatsion">Gestatsion</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-102 transition-transform duration-300 shadow-lg"
        >
          Davom etish
        </button>
        <div className="text-center mt-4">
  <p className="text-gray-500">
    Allaqachon ro‘yxatdan o‘tganmisiz?{" "}
    <Link
      to="/login"
      className="text-purple-600 font-semibold hover:underline"
    >
      Loginga o‘tish
    </Link>
  </p>
</div>
      </form>
      <ToastContainer />
    </div>
  );
}
