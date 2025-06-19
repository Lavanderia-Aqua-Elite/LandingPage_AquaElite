// Importamos modulos
import { useMemo } from 'react';
import L from 'leaflet';

// Creamos el hook para la localización
export const useLocation = () => {
    // Configuración constante que podría venir de un archivo de configuración
    const schoolPosition = [19.170164547081157, -96.12093982486725];
    const schoolAddress = "C.+Antonio+de+Mendoza+486";

    // Icono memorizado para evitar recreación en cada render
    const defaultIcon = useMemo(() => new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }), []);

    // Constante para guardaar la API de Google o Apple
    const handleRouteClick = () => {
        const userAddress = "Current+Location";
        const googleMapsUrl = `https://www.google.com/maps/dir/${userAddress}/${schoolAddress}`;
        const appleMapsUrl = `http://maps.apple.com/?saddr=${userAddress}&daddr=${schoolAddress}`;

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.open(appleMapsUrl, '_blank');
        } else {
            window.open(googleMapsUrl, '_blank');
        }
    };

    return {
        schoolPosition,
        defaultIcon,
        handleRouteClick
    };
};