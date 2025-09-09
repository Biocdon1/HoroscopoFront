import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../config'; // ✅ usa tu config centralizada

function SignDetail() {
  const { signName } = useParams();
  const [frases, setFrases] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/api/signos/public`)
      .then(res => {
        const signo = res.data[signName.toLowerCase()];
        if (!signo) {
          setError('Signo no encontrado');
          return;
        }
        const frasesActivas = signo.frases?.filter(f => f.activo) || [];
        setFrases(frasesActivas);
      })
      .catch(() => setError('Error al cargar el signo'));
  }, [signName]);

  return (
    <div>
      <h2>{signName.toUpperCase()}</h2>
      {error && <p>{error}</p>}
      {frases.length > 0 ? (
        frases.map((f, i) => <p key={i}>{f.texto}</p>)
      ) : (
        <p>No hay frases activas para este signo.</p>
      )}
    </div>
  );
}

export default SignDetail;