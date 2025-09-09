import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignCard.css';
import '../styles/global.css';

const summaries = {
  Aries: "Impulsivo, valiente y lleno de energía.",
  Taurus: "Paciente, persistente y amante del confort.",
  Gemini: "Curioso, comunicativo y adaptable.",
  Cancer: "Emocional, protector y muy intuitivo.",
  Leo: "Carismático, creativo y líder nato.",
  Virgo: "Analítico, perfeccionista y servicial.",
  Libra: "Diplomático, equilibrado y amante de la belleza.",
  Scorpio: "Intenso, misterioso y profundamente emocional.",
  Sagittarius: "Aventurero, optimista y amante de la libertad.",
  Capricorn: "Disciplinado, ambicioso y confiable.",
  Aquarius: "Innovador, independiente y humanitario.",
  Pisces: "Soñador, empático y profundamente sensible."
};

const translations = {
  Aries: "Aries",
  Taurus: "Tauro",
  Gemini: "Géminis",
  Cancer: "Cáncer",
  Leo: "Leo",
  Virgo: "Virgo",
  Libra: "Libra",
  Scorpio: "Escorpio",
  Sagittarius: "Sagitario",
  Capricorn: "Capricornio",
  Aquarius: "Acuario",
  Pisces: "Piscis"
};

const SignCard = ({ name, imageUrl }) => {
  const translatedName = translations[name] || name;
  const summary = summaries[name] || "Descripción no disponible.";

  return (
    <Link to={`/sign/${name.toLowerCase()}`} className="sign-card">
      <img src={imageUrl} alt={translatedName} className="sign-card-image" />
      <div className="sign-card-content">
        <h2 className="sign-card-title text-white">{translatedName}</h2>
        <p className="sign-card-summary text-white">{summary}</p>
      </div>
    </Link>
  );
};

export default SignCard;