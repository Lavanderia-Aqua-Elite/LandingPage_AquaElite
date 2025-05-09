// Importa los modulos necesarios
import React from "react";
import classes from '../styles/Header.module.css';
import NameOrganization from "../components/NameOrganization";
import ToggleBtn from "../components/ToggleBtn";

// Exporta por defecto y crea el componente
export default function Header() {
    return (
        <>

            {/* Encabezado */}
            <header className={classes.header}>
                <NameOrganization />
                <ToggleBtn />
            </header>

        </>
    )

}