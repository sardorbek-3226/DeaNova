import React, { useState } from "react";
import { FaAppleAlt, FaBars, FaComments, FaHome, FaTimes, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

// --- Mahsulotlar data ---
const dukkaklik = [
  { name: "Quritilgan dukkaklilar (loviya, noʻxat, mosh)", nb: "1 osh qoshiq", weight: "20 g" },
  { name: "Gaynatilgan dukkaklilar", nb: "3 osh qoshiq", weight: "50 g" },
  { name: "Poʻstisiz pishirilgan kartoshka", nb: "1 dona", weight: "75 g" },
  { name: "Xom yoki pishirilgan kartoshka", nb: "1 dona", weight: "65 g" },
  { name: "Kartoshka pyuresi", nb: "2 osh qoshiq", weight: "75 g" },
  { name: "Qovurilgan kartoshka", nb: "1.5–2 osh qoshiq", weight: "35 g" },
  { name: "Kartoshka Fri", nb: "12 bo‘lak", weight: "35 g" },
  { name: "Kartoshkali chips", nb: "1 kichik o‘ram", weight: "25 g" },
  { name: "Jo‘xori (so‘tasi)", nb: "0.5 dona", weight: "100 g" },
  { name: "Konservalangan jo‘xori", nb: "3 osh qoshiq", weight: "70 g" },
  { name: "Gaynatilgan jo‘xori", nb: "3 osh qoshiq", weight: "50 g" },
  { name: "Jo‘xori bodrogi", nb: "4 osh qoshiq", weight: "15 g" },
  { name: "Sabzi", nb: "3 ta katta sabzi", weight: "400 g" },
  { name: "Lavlagi", nb: "2 ta katta lavlagi", weight: "400 g" },
  { name: "Gaynatilgan loviya", nb: "3 osh qoshiq", weight: "50 g" },
  { name: "Gaynatilgan chechevitsa", nb: "2 osh qoshiq to‘la", weight: "50 g" },
  { name: "Qovoq", nb: "-", weight: "200 g" },
  { name: "Ketchup", nb: "2–3 osh qoshiq", weight: "30–50 g" },
  { name: "Topinambur", nb: "-", weight: "70 g" },
  { name: "Soya (quritilgan)", nb: "4 osh qoshiq", weight: "45 g" },
];

const nonlik = [
  { name: "Oddiy non", nb: "1 bo‘lak", weight: "35 g" },
  { name: "Javdar unidan tayyorlangan non", nb: "1 bo‘lak", weight: "20 g" },
  { name: "Oq, kulcha non", nb: "1 bo‘lak", weight: "25 g" },
  { name: "Qora non", nb: "1 bo‘lak", weight: "30 g" },
  { name: "Kepakli non", nb: "1 bo‘lak", weight: "25 g" },
  { name: "Quritilgan non to‘g‘ralari", nb: "2 dona", weight: "20 g" },
  { name: "Nonli bo‘yoqchalar", nb: "Hajmiga qarab", weight: "20 g" },
  { name: "Shirin bo‘lmagan gotirligan non", nb: "2 dona", weight: "20 g" },
  { name: "Shirin bo‘lmagan teshik kulcha", nb: "1.5–2 dona", weight: "20 g" },
  { name: "Kreker", nb: "2 dona", weight: "20 g" },
  { name: "Muzlatilgan oshirma xamir", nb: "-", weight: "35 g" },
  { name: "Yupqa qaymoq", nb: "1 katta", weight: "30 g" },
  { name: "Tvorogli qaymoq", nb: "1 dona", weight: "50 g" },
  { name: "Go‘shtli qaymoq", nb: "1 dona", weight: "50 g" },
  { name: "Tvorogli varenik", nb: "4 dona", weight: "50 g" },
  { name: "Chuchvara", nb: "4 dona", weight: "50 g" },
  { name: "Paramach", nb: "1 dona", weight: "50 g" },
  { name: "Vafli maydasi", nb: "1 dona", weight: "50 g" },
  { name: "Un", nb: "1 osh qoshiq to‘la", weight: "15 g" },
  { name: "Pryanik", nb: "1/2 dona", weight: "40 g" },
  { name: "Olad’", nb: "1 o‘rtacha", weight: "30 g" },
  { name: "Quritilgan gotirligan non", nb: "1 osh qoshiq to‘la", weight: "15 g" },
  { name: "Pechene (qaymoqli)", nb: "1–2 dona", weight: "15 g" },
  { name: "Yormalar (krupa)", nb: "1 osh qoshiq to‘la", weight: "15 g" },
  { name: "Xom guruch", nb: "1 osh qoshiq to‘la", weight: "15 g" },
];

const mevaSabzavot = [
  { name: "Aprikos (Orik)", nb: "2 dona / 100 g" },
  { name: "Avokado", nb: "1 dona / 200 g" },
  { name: "Behi (Xurmo olmasi)", nb: "1 dona / 140 g" },
  { name: "Olcha", nb: "4 dona / 140 g" },
  { name: "Ananas", nb: "1 kichik dona / 130 g" },
  { name: "Apelsin", nb: "1 dona / 270 g" },
  { name: "Tarvuz", nb: "1 bo‘lak / 70 g" },
  { name: "Banan", nb: "½ dona / 80 g" },
  { name: "Uzum", nb: "10 dona / 90 g" },
  { name: "Greypfrut", nb: "½ dona / 100 g" },
  { name: "Nok", nb: "1 dona / 100 g" },
  { name: "Qovun", nb: "1 bo‘lak / 140 g" },
  { name: "Maymunjon (Anjir)", nb: "1 dona / 110 g" },
  { name: "Kivi", nb: "1 dona / 160 g" },
  { name: "Qulupnay", nb: "-" },
];

const quritilgan = [
  { name: "Bahor mevasi (quritilgan)", nb: "1 dona" },
  { name: "Mayiz (quritilgan)", nb: "10 dona" },
  { name: "Anjir (quritilgan)", nb: "1 dona" },
  { name: "Turonak (dana) (quritilgan)", nb: "3 dona" },
  { name: "Xurmo (quritilgan)", nb: "2 dona" },
  { name: "Qizil olxo‘ri qoqi (quritilgan)", nb: "3 dona" },
  { name: "Yong‘oqlar (umumiy)", nb: "1 osh qoshiq" },
  { name: "Saba yong‘og‘i", nb: "40 dona (po‘chog‘i bilan), 1/4 stakan (po‘chog‘isiz)" },
  { name: "Yer yong‘og‘i", nb: "1/4 stakan" },
  { name: "Kedr yong‘og‘i", nb: "1/4 stakan" },
  { name: "Keshyu yong‘og‘i", nb: "2 osh qoshiq" },
  { name: "Kokos urug‘i", nb: "1.5 stakan" },
  { name: "Bodom", nb: "3/4 stakan" },
  { name: "Pista (handon)", nb: "1/2 stakan" },
  { name: "Funduk", nb: "3/4 stakan" },
];

const shirinlik = [
  { name: "Shakarli murabbo", nb: "1 osh qoshiq", calories: "10.0" },
  { name: "Gazlangan shirin ichimliklar", nb: "½ stakan", calories: "100.0" },
  { name: "Karamel", nb: "4–6 dona" },
  { name: "Kvas", nb: "1 stakan", calories: "250.0" },
  { name: "Kisel", nb: "1 stakan", calories: "250.0" },
  { name: "Kompot", nb: "1 dona", calories: "16.9" },
  { name: "Shokoladli konfet", nb: "1 osh qoshiq", weight: "10–12 g" },
  { name: "Asal", nb: "2 bo‘lak", weight: "10 g" },
  { name: "Qand", nb: "0.5 bo‘lak", weight: "10 g" },
  { name: "Novvot (tayoqchali)", nb: "1 choy qoshiq", weight: "15 g" },
  { name: "Sumalak", nb: "1 osh qoshiq", weight: "10 g" },
  { name: "Shakar qumi", nb: "1 osh qoshiq", weight: "12 g" },
  { name: "Fruktoza", nb: "⅓ paket", weight: "20 g" },
  { name: "Shokolad", nb: "-", weight: "30 g" },
  { name: "Qand o‘rnini bosuvchi qo‘shilgan shokolad", nb: "⅓ paket", weight: "20 g" },
];

// --- Komponent ---
export default function ProductsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const renderSection = (title, items) => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filtered.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-200">
              <h3 className="font-semibold text-lg sm:text-xl">{item.name}</h3>
              <p className="text-gray-500 text-sm sm:text-base">{item.nb}{item.weight && ` - ${item.weight}`}</p>
              {item.calories && <p className="text-gray-400 text-sm sm:text-base">Kaloriy: {item.calories}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-purple-600">DiaNova</h1>

        {/* Hamburger icon */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl text-purple-600" /> : <FaBars className="text-2xl text-purple-600" />}
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
          <Link 
            to="/" 
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Chiqish
          </Link>
        </div>
      )}
    </nav>

      {/* Page content */}
      <div className="p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">Mahsulotlar</h1>

        {/* Qidirish inputi */}
        <input
          type="text"
          placeholder="Mahsulot qidirish..."
          className="w-full p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Bo‘limlar */}
        {renderSection("Dukkaklik", dukkaklik)}
        {renderSection("Nonlik", nonlik)}
        {renderSection("Meva & Sabzavot", mevaSabzavot)}
        {renderSection("Quritilgan", quritilgan)}
        {renderSection("Shirinlik", shirinlik)}
      </div>
    </div>
  );
}
