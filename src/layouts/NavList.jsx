// Importa modulos
import { navList } from '../hooks/navList';
import classes from '../styles/NavList.module.css'; // Asegúrate que esta ruta sea correcta
import useToggle from '../hooks/useToggle';
import ToggleBtn from '../components/ToggleBtn';
import useMobileDetect from '../hooks/useMobileDetect';
import { Link } from 'react-router-dom';

// Exporta y crea por defecto el NavList
export default function NavList() {
    const [isExpanded, toggle] = useToggle(false);
    const isMobile = useMobileDetect();

    return (
        <nav className={classes.nav}>
            {/* Botón solo visible en móviles */}
            {isMobile && (
                <ToggleBtn 
                    isExpanded={isExpanded} 
                    onToggle={toggle} 
                    className={classes.mobileToggle}
                />
            )}

            {/* Lista de navegación */}
            <ul className={`
                ${classes.navList} 
                ${isMobile && isExpanded ? classes.expanded : ''}
            `}>
                {navList.map((item) => (
                    <li key={item.id} className={classes.navItem}>
                        {item.isRoute ? (
                            <Link 
                                to={item.targetId} 
                                className={classes.navLink}
                                onClick={() => isMobile && toggle()}
                            >
                                {item.icon}
                                <span>{item.list}</span>
                            </Link>
                        ) : (
                            <a 
                                href={item.targetId} 
                                className={classes.navLink}
                                onClick={() => isMobile && toggle()}
                            >
                                {item.icon}
                                <span>{item.list}</span>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}