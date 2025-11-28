import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">Dashboard</h1>
      {user && <p className="mb-4 text-gray-700">Welcome, {user.name}!</p>}

      <button
        onClick={() => navigate("/home")}
        className="mb-3 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </button>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
