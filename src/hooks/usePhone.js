// Importa los modulos necesarios
import { useState } from 'react';

// Exporta por defecto y crea el hook 
export default function usePhone() {
    const [phoneStyles, setPhoneStyles] = useState({});

    // Ejemplo de función para cambiar estilos dinámicamente
    const updatePhoneSize = (width, height) => {
        setPhoneStyles({
            width: `${width}px`,
            height: `${height}px`
        });
    };

    return {
        phoneStyles,
        updatePhoneSize
    };
}