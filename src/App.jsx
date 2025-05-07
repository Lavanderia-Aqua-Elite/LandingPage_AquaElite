// Importa los modulos necesarios
import React from 'react';

import './App.css'; // Importa el css
import AppRoutes from './routes/AppRoutes'; // Importa el componente que maneja las rutas

// Exporta por defecto el componente y crea la función App
export default function App() {
  return (

    <div className='App'>
      <AppRoutes />
    </div>
  )
}

