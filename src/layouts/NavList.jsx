// Importa los modulos
import { navList } from '../hooks/navList';
import classes from '../styles/NavList.module.css'; 
import useToggle from '../hooks/useToggle';
import ToggleBtn from '../components/ToggleBtn';
import useMobileDetect from '../hooks/useMobileDetect';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Exporta y crea por defecto el componente
export default function NavList() {
    // Estado para menú móvil
    const [isExpanded, toggle] = useToggle(false);
    const isMobile = useMobileDetect();
    
    // Hooks de navegación
    const navigate = useNavigate();
    const location = useLocation();

    /**
     * Maneja el comportamiento de navegación inteligente:
     * - Para tipo 'hybrid': scroll en Home o navega a Home + scroll
     * - Para tipo 'route': navegación normal
     * - Cierra el menú en móviles al seleccionar
     */
    const handleNavClick = (item, e) => {
        if (isMobile) toggle();

        if (item.type === 'hybrid') {
            if (location.pathname === '/') {
                e.preventDefault();
                const section = document.querySelector(item.targetId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    // Actualiza la URL sin recargar
                    window.history.pushState(null, '', item.targetId);
                }
            } else {
                // Navega a Home y luego al anchor
                navigate('/', { state: { scrollTo: item.targetId } });
            }
        }
        // Las rutas normales se manejan automáticamente con Link
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
                        <Link
                            to={item.type === 'hybrid' ? item.route : item.route}
                            className={classes.navLink}
                            onClick={(e) => handleNavClick(item, e)}
                            state={item.type === 'hybrid' ? { scrollTo: item.targetId } : undefined}
                        >
                            {item.icon}
                            <span>{item.list}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}