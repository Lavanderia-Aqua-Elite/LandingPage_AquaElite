// Importa los modulos necesarios
import { useCallback } from "react";
import { initialLinks } from "./navLinksData";

export const useNavLinks = () => {
    const handleScroll = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            window.history.pushState(null, '', `#${id}`);
        }
    }, []);

    return {
        links: initialLinks, // Usamos los datos importados
        handleScroll
    };
};