// Importa los modulos necesarios
import { useCallback } from "react";
import { FaMapMarkerAlt, FaUsers, FaTools, FaEnvelope } from 'react-icons/fa';

// Array para el contener la lista de enlazes
const initialLinks = [
    {
        id: crypto.randomUUID(),
        path: '#ubicacion',
        text: 'Ubícanos',
        icon: <FaMapMarkerAlt size={16} />,
        visible: true
    },
    {
        id: crypto.randomUUID(),
        path: '#nosotros',
        text: 'Sobre Nosotros',
        icon: <FaUsers size={16} />,
        visible: true
    },
    {
        id: crypto.randomUUID(),
        path: '#servicios',
        text: 'Servicios',
        icon: <FaTools size={16} />,
        visible: true
    },
    {
        id: crypto.randomUUID(),
        path: '#contacto',
        text: 'Contáctanos',
        icon: <FaEnvelope size={16} />,
        visible: true
    }
]