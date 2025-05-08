// Importa los módulos necesarios
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importar páginas
import Home from "../pages/Home";

// Exporta por defecto y crea el componente para manejar las rutas
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}