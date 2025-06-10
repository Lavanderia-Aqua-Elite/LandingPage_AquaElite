// Importa modulos
import { navList } from '../hooks/navList';
import classes from '../styles/NavList.module.css'; 
import useToggle from '../hooks/useToggle';
import ToggleBtn from '../components/ToggleBtn';
import useMobileDetect from '../hooks/useMobileDetect';
import { Link } from 'react-router-dom';

// Exporta y crea el NavList
export default function NavList() {
    const [isExpanded, toggle] = useToggle(false);
    const isMobile = useMobileDetect();

    const handleNavClick = (item) => {
        if (isMobile) {
            toggle();
        }
        // Para anchors, usa scrollToSection si estamos en la home
        if (item.type === 'anchor' && window.location.pathname === '/') {
            scrollToSection(item.targetId);
        }
    };

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
                                onClick={() => handleNavClick(item)}
                            >
                                {item.icon}
                                <span>{item.list}</span>
                            </Link>
                        ) : (
                            <Link 
                                to="/" 
                                className={classes.navLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item);
                                }}
                            >
                                {item.icon}
                                <span>{item.list}</span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}