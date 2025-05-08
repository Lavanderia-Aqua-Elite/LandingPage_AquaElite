// Importa los modulos necesarios
import React from 'react';
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';


// Exporta por defecto el componente y lo crea
export default function Home() {
    return (
        <div className={classes.mainHome}>
            <Header/>
        </div>
    )
}