// Importa los módulos necesarios
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar páginas
import Home from "../pages/Home";
import Contact from "../pages/Contact";


// Exporta por defecto y crea el componente para manejar las rutas
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/ubicacion" element={<Location/>} />
            </Routes>
        </Router>
    );
}