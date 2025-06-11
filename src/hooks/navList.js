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
    targetId: '#inicio',
    route: '/',
    type: 'hybrid' 
  },
  {
    id: 1,
    list: 'Sobre Nosotros',
    icon: React.createElement(FaUsers),
    targetId: '#nosotros',
    route: '/',
    type: 'hybrid'
  },
  {
    id: 2,
    list: 'Tienda',
    icon: React.createElement(FaShoppingCart),
    targetId: '#tienda',
    route: '/tienda',
    type: 'route' // Ruta completa
  },
  {
    id: 3,
    list: 'Contáctanos',
    icon: React.createElement(FaEnvelope),
    targetId: '#contacto',
    route: '/contacto',
    type: 'route'
  },
  {
    id: 4,
    list: 'Ubícanos',
    icon: React.createElement(FaMapMarkerAlt),
    targetId: '#ubicacion',
    route: '/ubicacion',
    type: 'route'
  }
];