import { useState, useEffect } from 'react';

export default function useMobileDetect(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        // Verifica si window está definido (para SSR)
        if (typeof window !== 'undefined') {
            handleResize(); // Ejecuta inmediatamente
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [breakpoint]);

    return isMobile;
}