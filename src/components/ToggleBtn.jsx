// Importa los modulos necesarios
import React from "react";
import classes from '../styles/ToggleBtn.module.css';

// Exporta por defecto y crea el componente
export default function ToggleBtn( {isExpanded, onToggle} ) {
    return (
        <>
            {/* Botón despegable */}
            <button
                onClick={onToggle}
                className={`${classes.toggleBtn} ${isExpanded ? classes.expanded : ""}`}
                aria-label={isExpanded ? "Cerrar menú" : "Abrir menú"}
            >
            {isExpanded ? (
                <span className={classes.iconBtn}>✕</span>
            ) : (
                <span className={classes.iconBtn}>☰</span> 
            )}
            </button>
        </>
    );
}