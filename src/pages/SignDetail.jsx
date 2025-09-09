import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSignByName } from '../services/signService';
import '../styles/SignDetail.css';

const BACKEND_BASE_URL = 'http://localhost:5000';

const SignDetail = () => {
  const { signName } = useParams();
  const navigate = useNavigate();
  const [signData, setSignData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSignByName(signName)
      .then(data => {
        setSignData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar el signo:', err);
        setLoading(false);
      });
  }, [signName]);

  if (loading) return <p>Cargando información zodiacal...</p>;
  if (!signData) return <p>Signo no encontrado.</p>;

  const imageUrl = signData.accesoImagen
    ? `${BACKEND_BASE_URL}${signData.imagen}`
    : `/assets/signs/${signName}.svg`;

  return (
    <div className="sign-detail-container">
      <h2 className="sign-detail-title">{signName.toUpperCase()}</h2>

      <img
        src={imageUrl}
        alt={signName}
        className="sign-detail-image"
      />

      <p className="sign-detail-description">{signData.default}</p>

   {signData.frases?.some(f => f.activo) ? (
  <div className="sign-detail-frases">
    <h3>Frases zodiacales:</h3>
    <ul>
      {signData.frases
        .filter(f => f.activo)
        .map((f, i) => (
          <li key={i}>{f.texto}</li>
        ))}
    </ul>
  </div>
) : (
  <p>No hay frases actualmente.</p>
)}

      <button className="sign-detail-button" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default SignDetail;