// Importar librerias
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import classes from '../styles/IconSocial.module.css'

export const iconSocial = [
    {
        icon: <FaWhatsapp className={classes.icon} />,
        url: "https://wa.me/2299316363 ",
        title: "WhatsApp"
    },
    {
        icon: <FaInstagram className={classes.icon} />,
        url: "https://instagram.com/tu_usuario",
        title: "Instagram"
    },
    {
        icon: <FaPhone className={classes.icon} />,
        url: "tel:+2299316363 ",
        title: "Llamar por teléfono"
    }
]