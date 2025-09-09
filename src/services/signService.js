import axios from 'axios';
import { BACKEND_BASE_URL } from '../config'; // Asegúrate de que la URL base esté en el config.js

const BASE_URL = `${BACKEND_BASE_URL}/api/signos`;

// 🔹 Obtener todos los signos (admin o protegidos)
export const getAllSigns = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los signos:', error);
    throw error;
  }
};

// 🔹 Obtener un signo por nombre (admin o protegidos)
export const getSignByName = async (signName) => {
  try {
    const response = await axios.get(`${BASE_URL}/public`);
    const signo = response.data[signName.toLowerCase()];
    if (!signo) throw new Error('Signo no encontrado');
    return signo;
  } catch (error) {
    console.error(`Error al obtener el signo ${signName}:`, error);
    throw error;
  }
};
  

// 🔹 Obtener todos los signos públicos (frontend sin token)
export const obtenerSignosPublicos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/public`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener signos públicos:', error);
    throw error;
  }
};