import { StrictMode } from 'react'; // Importa el modo estricto
import { createRoot } from 'react-dom/client'; // Importa la creación de root
import index from './index.module.css'; // Importa el module llamandolo por index
import App from './App.jsx'; // Importa el componente App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
