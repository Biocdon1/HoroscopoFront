import React from 'react';
import SignCard from '../components/SignCard';
import '../styles/Home.css';

// ✅ Importa explícitamente las imágenes .png
import AriesImg from '../assets/signs/Aries.png';
import TaurusImg from '../assets/signs/Taurus.png';
import GeminiImg from '../assets/signs/Gemini.png';
import CancerImg from '../assets/signs/Cancer.png';
import LeoImg from '../assets/signs/Leo.png';
import VirgoImg from '../assets/signs/Virgo.png';
import LibraImg from '../assets/signs/Libra.png';
import ScorpioImg from '../assets/signs/Scorpio.png';
import SagittariusImg from '../assets/signs/Sagittarius.png';
import CapricornImg from '../assets/signs/Capricorn.png';
import AquariusImg from '../assets/signs/Aquarius.png';
import PiscesImg from '../assets/signs/Pisces.png';

const signs = [
  { name: 'Aries', imageUrl: AriesImg },
  { name: 'Taurus', imageUrl: TaurusImg },
  { name: 'Gemini', imageUrl: GeminiImg },
  { name: 'Cancer', imageUrl: CancerImg },
  { name: 'Leo', imageUrl: LeoImg },
  { name: 'Virgo', imageUrl: VirgoImg },
  { name: 'Libra', imageUrl: LibraImg },
  { name: 'Scorpio', imageUrl: ScorpioImg },
  { name: 'Sagittarius', imageUrl: SagittariusImg },
  { name: 'Capricorn', imageUrl: CapricornImg },
  { name: 'Aquarius', imageUrl: AquariusImg },
  { name: 'Pisces', imageUrl: PiscesImg }
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Explora los Signos Zodiacales</h1>
      <div className="signs-grid">
        {signs.map(sign => (
          <SignCard
            key={sign.name}
            name={sign.name}
            imageUrl={sign.imageUrl}
          />
        ))}
      </div>

      <a href="/admin" className="admin-access-button">
        Acceso administrador
      </a>
    </div>
  );
};

export default Home;