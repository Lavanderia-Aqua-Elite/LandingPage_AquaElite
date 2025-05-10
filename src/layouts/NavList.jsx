// Importa los modulos necesarios
import { navList } from '../hooks/navList'; 
import classes from '../styles/NavList..module.css';
import useToggle from '../hooks/useToggle';
import ToggleBtn from '../components/ToggleBtn';


// Exporta por defecto y crea el componente
export default function NavList() {
    // Uso del hook para controlar el estado
    const [isExpanded, toggle] = useToggle(false);

    return (
        <nav className={classes.nav}>
            {/* Boton para abir y cerrar */}
            <ToggleBtn isExpanded={isExpanded} onToggle={toggle} />

            {/* Lista que responde al toggle */}
            <ul 
                className={`${classes.navList} ${
                    isExpanded ? classes.expanded : classes.collapsed
                }`}
            >
            {navList.map((item) => (
                <li key={item.id} className={classes.navItem}>
                    <a 
                        href={item.targetId} 
                        className={classes.navLink}
                    >
                        {item.icon}
                        {item.list}
                    </a>
                </li>
            ))}
            </ul>

        </nav>
    );
}