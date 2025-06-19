// Importa modulos
import React from 'react';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';

// Exporta y crea el array que contiene los iconos
export default function useIconSocial(classes) {
    return [
        {
        icon: React.createElement(FaWhatsapp, { className: `${classes.icon} ${classes.whatsapp}` }),
        url: "https://wa.me/2299316363",
        title: "WhatsApp"
    },
    {
        icon: React.createElement(FaInstagram, { className: `${classes.icon} ${classes.instagram}` }),
        url: "https://instagram.com/tu_usuario",
        title: "Instagram"
    },
    {
        icon: React.createElement(FaPhone, { className: `${classes.icon} ${classes.phone}` }),
        url: "tel:+2299316363",
        title: "Llamar por teléfono"
    }
  ];
}
