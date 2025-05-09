// Importa los modulos necesarios
import React from "react";
import classes from '../styles/NavBar.module.css';
import NameOrganization from "../components/NameOrganization";
import ToggleBtn from "../components/ToggleBtn";
import ListExpansive from "../components/ListExpansive";



// Exporta por defecto y crea el componente
export default function NavBar() {
    return (

        <nav className={classes.nav}>
            {/* Nombre de la organización */}
            <NameOrganization />
            {/* Lista expansiva */}
            <ListExpansive />
            {/* Botón expansivo */}
            <ToggleBtn />
        </nav>

    )

}