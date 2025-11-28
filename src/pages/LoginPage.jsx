import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success("Kirish muvaffaqiyatli!", { position: "top-right", autoClose: 2000 });
      setTimeout(() => navigate("/home"), 2100);
    } else {
      toast.error("Iltimos, email va parolni kiriting", { position: "top-right", autoClose: 2000 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-8">
        <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-6">Kirish</h2>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="border pl-12 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 w-full hover:shadow-md transition"
            />
          </div>

          <div className="relative">
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
            )}
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type={showPassword ? "text" : "password"} placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)}
              className="border pl-12 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 w-full hover:shadow-md transition"
            />
          </div>
        </div>

        <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">🔑 Kirish</button>

        <p className="text-center text-gray-500">
          Ro‘yxatdan o‘tmaganmisiz?{" "}
          <span onClick={() => navigate("/register")} className="text-purple-600 font-semibold cursor-pointer hover:underline">
            Ro‘yxatdan o‘tish
          </span>
        </p>

        <ToastContainer />
      </form>
    </div>
  );
}
