// Importa los modulos necesarios
import React from "react";
import classes from '../styles/Header.module.css';

// Exporta por defecto y crea el componente
export default function Header() {
    return (
        <>

            {/* Encabezado */}
            <header className={classes.header}>
                <strong className={classes.blackText_header}>AquaElite</strong>
            </header>

        </>
    )

}