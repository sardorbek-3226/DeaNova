import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatBotPage from "./pages/ChatBotPage";
import VideoPage from "./pages/VideoPage";
import ProductPage from "./pages/ProductPage";
import Premium from "./pages/Premium";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import DoctorConsultation from "./pages/DoctorConsultation";
import DoctorChat from "./pages/DoctorChat";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/doctor-consultation" element={<DoctorConsultation />} />
        <Route path="/doctorConsultation" element={<DoctorConsultation />} />

        <Route path="/doctorChat/:id" element={<DoctorChat />} /> {/* Har bir doktor uchun chat */}
      </Routes>
    </Router>
  );
}


