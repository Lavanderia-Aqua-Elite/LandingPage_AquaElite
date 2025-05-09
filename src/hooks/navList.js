// Importa los modulos necesarios
import React from 'react'; // ¡Importa React!
import { FaMapMarkerAlt, FaUsers, FaTools, FaEnvelope } from 'react-icons/fa';

// Constante que crea un mapa que almacena los enlazes
export const navList = [
  {
    id: 0,
    list: 'Ubicanos',
    icon: React.createElement(FaMapMarkerAlt), // Sin JSX
    targetId: '#ubicacion'
  },
  {
    id: 1,
    list: 'Sobre Nosotros',
    icon: React.createElement(FaUsers),
    targetId: '#nosotros'
  },
  {
    id: 2,
    list: 'Servicios',
    icon: React.createElement(FaTools),
    targetId: '#servicios'
  },
  {
    id: 3,
    list: 'Contactanos',
    icon: React.createElement(FaEnvelope),
    targetId: '#contactanos'
  }
];