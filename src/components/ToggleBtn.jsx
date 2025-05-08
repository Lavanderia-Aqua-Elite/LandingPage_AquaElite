// Importa los modulos necesarios
import React from "react";

// Exporta por defecto y crea el componente
export default function ToggleBtn( {isExpanded, onToggle} ) {
    return (
        <>
            {/* Botón despegable */}
            <button
                onClick={onToggle}
                className={`toggle-btn ${isExpanded ? "expanded" : ""}`}
                aria-label={isExpanded ? "Cerrar menú" : "Abrir menú"}
            >

            </button>
        </>
    );
}