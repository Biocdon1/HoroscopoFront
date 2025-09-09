import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom'; 
import axios from 'axios';
import './index.css';
import App from './App.jsx';

axios.defaults.baseURL = 'http://localhost:5000'; // Cambia esto a la URL de tu API
 
createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);