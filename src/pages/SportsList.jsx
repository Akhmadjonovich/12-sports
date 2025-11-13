// src/pages/SportsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { sportsData } from "../data/SportsData";

export default function SportsList() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">12 ta sport turi</h1>
        <p className="text-center mt-2 text-gray-600">Kartaga bosib, har bir sport haqida batafsil ma'mumot olishingiz mumkin.</p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sportsData.map((s) => (
            <Link
              to={`/sports/${s.id}`}
              key={s.id}
              className="block bg-white rounded-2xl shadow hover:shadow-md transform hover:-translate-y-1 transition overflow-hidden"
            >
              <div className="w-full h-40 md:h-44">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h2 className="font-semibold text-lg">{s.name}</h2>
                <p className="text-sm text-gray-500 max-h-15 mt-1">{s.founded}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      
    </div>
  );
}
