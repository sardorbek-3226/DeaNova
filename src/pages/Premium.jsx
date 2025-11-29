import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function PricingPlans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Oddiy",
      price: "$0.0 / oy",
      features: [
        " ChatBot foydalanish",
        "Oddiy tavsiyalar",
        "Rasm yuklash",
      ],
      bg: "bg-gradient-to-b from-purple-100 to-blue-100",
      text: "text-gray-800",
      button: "bg-purple-600 text-white hover:bg-purple-700",
      route: "/home",
    },
    {
      name: "Premium",
      price: "$10.99 / oy",
      features: [
        "Cheksiz ChatBot foydalanish",
        "AI tavsiyalar",
        "Rasm yuklash cheksiz",
        "Malakali doktorlar bilan maslahat olish",
      ],
      bg: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
      text: "text-white",
      button: "bg-white text-purple-600 hover:bg-gray-200",
      route: "/doctorConsultation",
    },
  ];

  const handleSelectPlan = (plan) => {
    localStorage.setItem("selectedPlan", plan.name);
    navigate(plan.route);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      
      {/* Orqaga tugma */}
      <div className="self-start mb-6">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          <FaArrowLeft /> Orqaga
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-purple-600 mb-10 text-center">
        Tariflarimiz
      </h1>

      <div className="grid sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${plan.bg} ${plan.text} flex flex-col p-8 rounded-3xl shadow-2xl transform transition hover:scale-105`}
          >
            <h2 className="text-3xl font-bold mb-4">{plan.name}</h2>
            <p className="text-2xl font-semibold mb-6">{plan.price}</p>
            <ul className="flex-1 mb-6 space-y-3">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 rounded-full ${
                      plan.name === "Premium" ? "bg-white" : "bg-purple-600"
                    }`}
                  />
                  {feat}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSelectPlan(plan)}
              className={`px-6 py-3 rounded-xl font-semibold ${plan.button} transition`}
            >
              Tanlash
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
