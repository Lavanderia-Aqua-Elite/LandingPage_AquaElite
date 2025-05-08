// Importa los módulos necesarios
import React from 'react';

// Importando componentes
import AppRoutes from './routes/AppRoutes'; // Importa el componente que maneja las rutas

// Exporta por defecto el componente y crea la función App
export default function App() {
  return (
    <div className='App'>
      <AppRoutes />
    </div>
  );
}