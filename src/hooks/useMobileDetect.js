import { useState, useEffect } from 'react';

export default function useMobileDetect(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        // Verificación inicial
        checkIfMobile();

        // Event listener para cambios de tamaño
        window.addEventListener('resize', checkIfMobile);

        // Limpieza
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, [breakpoint]);

    return isMobile;
}