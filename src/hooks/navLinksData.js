// Importa los modulos necesarios
import { FaMapMarkerAlt, FaUsers, FaTools, FaEnvelope } from 'react-icons/fa';

// Array para el contener la lista de enlazes
export const initialLinks = [
    {
        id: crypto.randomUUID(),
        path: '#ubicacion',
        text: 'Ubícanos',
        icon: <FaMapMarkerAlt />,
        visible: true
    },
    {
        id: crypto.randomUUID(),
        path: '#nosotros',
        text: 'Sobre Nosotros',
        icon: <FaUsers />,
        visible: true
    },
    {
        id: crypto.randomUUID(),
        path: '#servicios',
        text: 'Servicios',
        icon: <FaTools />,
        visible: true
    },
    {
        id: crypto.randomUUID(),
        path: '#contacto',
        text: 'Contáctanos',
        icon: <FaEnvelope />,
        visible: true
    }
]