// Importa los modulos necesarios
import React from "react";
import classes from '../styles/Header.module.css';
import NameOrganization from "../components/NameOrganization";
import ToggleBtn from "../components/ToggleBtn";
import ListNav from "../components/ListNav";

// Exporta por defecto y crea el componente
export default function NavBar() {
    return (
        <>

            {/* Encabezado */}
            <nav className={classes.header}>
                {/* Nombre de la organización */}
                <NameOrganization />
                {/* Lista expansiva */}
                <ListNav />
                {/* Botón expansivo */}
                <ToggleBtn />
            </nav>

        </>
    )

}