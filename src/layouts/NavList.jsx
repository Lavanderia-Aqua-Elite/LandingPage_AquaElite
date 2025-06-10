// Importa modulos
import { navList } from '../hooks/navList';
import classes from '../styles/NavList.module.css'; 
import useToggle from '../hooks/useToggle';
import ToggleBtn from '../components/ToggleBtn';
import useMobileDetect from '../hooks/useMobileDetect';
import { Link } from 'react-router-dom';

// Exporta y crea por defecto el NavList
export default function NavList() {
    const [isExpanded, toggle] = useToggle(false);
    const isMobile = useMobileDetect();

    const handleNavClick = () => {
        if (isMobile) {
            toggle(); // Cierra el menú en móviles
        }
    };

    return (
        <nav className={classes.nav}>
            {isMobile && (
                <ToggleBtn 
                    isExpanded={isExpanded} 
                    onToggle={toggle} 
                    className={classes.mobileToggle}
                />
            )}

            <ul className={`
                ${classes.navList} 
                ${isMobile ? classes.mobileNav : ''}
                ${isMobile && isExpanded ? classes.expanded : ''}
            `}>
                {navList.map((item) => (
                    <li key={item.id} className={classes.navItem}>
                        {item.type === 'route' ? (
                            <Link 
                                to={item.targetId} 
                                className={classes.navLink}
                                onClick={handleNavClick}
                            >
                                {item.icon}
                                <span>{item.list}</span>
                            </Link>
                        ) : (
                            <a 
                                href={item.targetId} 
                                className={classes.navLink}
                                onClick={handleNavClick}
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
