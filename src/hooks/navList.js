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
    type: 'anchor' // Navegación interna por anclas
  },
  {
    id: 1,
    list: 'Sobre Nosotros',
    icon: React.createElement(FaUsers),
    targetId: '#nosotros',
    type: 'anchor'
  },
  {
    id: 2,
    list: 'Tienda',
    icon: React.createElement(FaShoppingCart),
    targetId: '/tienda',
    type: 'route' // Ruta completa
  },
  {
    id: 3,
    list: 'Contáctanos',
    icon: React.createElement(FaEnvelope),
    targetId: '/contacto',
    type: 'route'
  },
  {
    id: 4,
    list: 'Ubícanos',
    icon: React.createElement(FaMapMarkerAlt),
    targetId: '/ubicacion',
    type: 'route'
  }
];