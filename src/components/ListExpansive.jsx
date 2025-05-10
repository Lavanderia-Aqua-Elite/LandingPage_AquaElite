// Importa los modulos necesarios
import React from 'react';
import { navList } from '../hooks/navList'; 
import classes from '../styles/ListExpansive.module.css';
import useToggle from '../hooks/useToggle';


// Exporta por defecto y crea el componente
export default function ListExpansive() {
    // Uso del hook para controlar el estado
    const [isExpanded, toggle] = useToggle(false);

    return (
        <ul className={classes.navList}>
            {navList.map((item) => (
                <li key={item.id} className={classes.navItem}>
                    <a 
                        href={item.targetId} 
                        className={classes.navLink}>
                            {item.icon} {/* ¡Funciona! */}
                            {item.list}
                        </a>
                </li>
            ))}
        </ul>
    );
}