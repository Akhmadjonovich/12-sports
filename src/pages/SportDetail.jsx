// src/pages/SportDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { sportsData } from "../data/SportsData";

export default function SportDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sport = sportsData.find((s) => s.id === id);

  if (!sport) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Sport topilmadi</h2>
          <Link to="/" className="mt-4 inline-block text-blue-600">
            Orqaga
          </Link>
        </div>
      </div>
    );
  }

  // YouTube ID ajratuvchi funksiya
  const getYoutubeId = (url) => {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(sport.video);

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-sm:p-2 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow overflow-hidden">

        {/* --- VIDEO SECTION --- */}
        {videoId && (
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={sport.name}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* --- CONTENT SECTION --- */}
        <div className="p-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600 mb-4"
          >
            ← Orqaga
          </button>

          <h1 className="text-3xl font-bold">{sport.name}</h1>
          <p className="text-gray-500 mt-1">{sport.founded}</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-700">
            <div>
              <h3 className="font-semibold">Jamoa o'lchami</h3>
              <p className="mt-1">{sport.teamSize}</p>

              <h3 className="font-semibold mt-4">Maydon o'lchami</h3>
              <p className="mt-1">{sport.fieldSize}</p>
            </div>

            <div>
              <h3 className="font-semibold">Asosiy qoidalar</h3>
              <p className="mt-1">{sport.rules}</p>

              <h3 className="font-semibold mt-4">Qisqacha tasnif</h3>
              <p className="mt-1">{sport.description}</p>

              <h3 className="font-semibold mt-4">Tarix</h3>
              <p className="mt-1">{sport.history}</p>
            </div>
          </div>

          {/* --- FACTS (array bo‘lsa) --- */}
          <div className="mt-6">
            <h3 className="font-semibold">Qo'shimcha faktlar</h3>

            {Array.isArray(sport.facts) ? (
              <ul className="list-disc ml-5 mt-2 space-y-1">
                {sport.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-1">{sport.facts}</p>
            )}
          </div>

          {/* --- BUTTONS --- */}
          <div className="mt-6 flex gap-2">
            <Link
              to="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Bosh sahifa
            </Link>

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="px-4 py-2 border rounded-lg"
            >
              Yuqoriga
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
