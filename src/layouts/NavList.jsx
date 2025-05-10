// Importa los modulos necesarios
import { navList } from '../hooks/navList'; 
import classes from '../styles/NavList..module.css';
import useToggle from '../hooks/useToggle';
import ToggleBtn from '../components/ToggleBtn';
import useMobileDetect from '../hooks/useMobileDetect';


export default function NavList() {
    const [isExpanded, toggle] = useToggle(false);
    const isMobile = useMobileDetect();

    return (
        <nav className={classes.navContainer}>
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
                ${isMobile ? classes.mobileNav : ''}
                ${isMobile && isExpanded ? classes.expanded : ''}
            `}>
                {navList.map((item) => (
                    <li key={item.id} className={classes.navItem}>
                        <a 
                            href={item.targetId} 
                            className={classes.navLink}
                            onClick={() => isMobile && toggle()}
                        >
                            {item.icon}
                            <span className={classes.linkText}>{item.list}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}