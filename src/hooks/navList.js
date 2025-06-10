// Importar modulos
import React from 'react';
import { 
  FaHome, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaShoppingCart, 
  FaEnvelope 
} from 'react-icons/fa';

// Exporta y crea el hook de navList
export const navList = [
  {
    id: 0,
    list: 'Inicio',
    icon: React.createElement(FaHome),
    targetId: '#inicio'
  },
  {
    id: 1,
    list: 'Sobre Nosotros',
    icon: React.createElement(FaUsers),
    targetId: '#nosotros'
  },
  {
    id: 2,
    list: 'Tienda',
    icon: React.createElement(FaShoppingCart),
    targetId: '/tienda', // Cambiado para que sea una ruta
    isRoute: true // Nueva propiedad para identificar rutas
  },
  {
    id: 3,
    list: 'Contáctanos',
    icon: React.createElement(FaEnvelope),
    targetId: '#contactanos'
  },
  {
    id: 4,
    list: 'Ubícanos',
    icon: React.createElement(FaMapMarkerAlt),
    targetId: '#ubicacion'
  }
];