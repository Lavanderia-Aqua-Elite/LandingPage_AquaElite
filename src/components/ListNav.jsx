// Importo los modulos necesarios
import React from "react";
import { useNavLinks } from "../hooks/useNavLinks";

// Exporta por defecto y crea el componente
export default function ListNav() {
    // Usamos el hook para obtener los link y la función handleScroll
    const { links, handleScroll } = useNavLinks();

    return(
        <>
            <ul className="navLinks">
                {Links.map((link) => (
                    <li key={link.id} className="navItem">
                        <a 
                            href={link.path}
                            className="navLink"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll(link.path.substring(1));
                            }}
                            aria-label={`Ir a ${link.text}`}
                        >
                            <span className="iconNav">{link.icon}</span>
                            <span className="iconNav">{link.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}