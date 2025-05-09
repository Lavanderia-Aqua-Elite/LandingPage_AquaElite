// Importa los modulos necesarios
import { FaMapMarkerAlt, FaUsers, FaTools, FaEnvelope } from 'react-icons/fa';

// Array para el contener la lista de enlazes
export const navList = [{
    id: 0,
    list: 'Ubicanos',
    icon: <FaMapMarkerAlt />,
    tagetId: '#ubicacion'
}, {
    id: 1,
    list: 'Sobre Nosotros',
    icon: <FaUsers />,
    targetId: '#nosotros'
}, {
    id: 2,
    list: 'Servicios',
    icon: <FaTools />,
    targetId: '#servicios'
}, {
    id: 3,
    list: 'Contactanos',
    icon: <FaEnvelope />,
    targetId: '#contactanos'
}]