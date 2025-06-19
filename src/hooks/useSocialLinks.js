// Importar modulos
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import classes from '../styles/IconSocial.module.css';

// Exporta y crea el hook
export function useSocialLinks() {
    return [
        {
            icon: <FaWhatsapp className={classes.icon} />,
            url: "https://wa.me/2299316363",
            title: "WhatsApp"
        },
        {
            icon: <FaInstagram className={classes.icon} />,
            url: "https://instagram.com/tu_usuario",
            title: "Instagram"
        },
        {
            icon: <FaFacebook className={classes.icon} />,
            url: "https://www.facebook.com/UniversidadJeanPiagetVeracruz/?fref=ts",
            title: "Facebook"
        },
        {
            icon: <FaEnvelope className={classes.icon} />,
            url: "mailto:informes@universidadjeanpiaget.com",
            title: "Correo electrónico"
        },
        {
            icon: <FaPhone className={classes.icon} />,
            url: "tel:+2299316363",
            title: "Llamar por teléfono"
        }
    ];
}
