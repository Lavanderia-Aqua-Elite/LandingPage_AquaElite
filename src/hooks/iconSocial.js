// Importar librerias
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';

// Crea la función que almacena un array de los icnos de redes sociales
export default function iconSocial(classes) {
    return [
        {
        icon: <FaWhatsapp className={`${classes.icon} ${classes.whatsapp}`} />,
        url: "https://wa.me/2299316363",
        title: "WhatsApp"
    },
    {
        icon: <FaInstagram className={`${classes.icon} ${classes.instagram}`} />,
        url: "https://instagram.com/tu_usuario",
        title: "Instagram"
    },
    {
        icon: <FaPhone className={`${classes.icon} ${classes.phone}`} />,
        url: "tel:+2299316363",
        title: "Llamar por teléfono"
    }
    ]
} 
    
