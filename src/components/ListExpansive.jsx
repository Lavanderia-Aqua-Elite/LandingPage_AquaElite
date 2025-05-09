// src/components/ListExpansive.jsx
import React from 'react';
import { navList } from '../hooks/navList'; // Importa desde el .js

export default function ListExpansive() {
    return (
        <ul className="navList">
            {navList.map((item) => (
                <li key={item.id} className="navItem">
                    <a 
                        href={item.targetId} 
                        className="navLink">
                            {item.icon} {/* ¡Funciona! */}
                            {item.list}
                        </a>
                </li>
            ))}
        </ul>
    );
}