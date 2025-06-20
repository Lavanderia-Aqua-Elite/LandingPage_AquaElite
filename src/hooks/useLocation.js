// Importamos los modulos
import { useMemo } from 'react';
import L from 'leaflet';

// Exporta y crea el mapeado de la localización
export const useLocation = () => {
    // Coordenadas exactas de AquaElite (19.109282, -96.1279454)
    const aquaElitePosition = [19.198428905650474, -96.13725934154299];
    const aquaEliteAddress = "C.+Mariano+Arista+746,+Centro,+91700+Veracruz,+Ver.";

    // Icono memoizado para optimización
    const defaultIcon = useMemo(() => new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28]
    }), []);

    // Maneja la apertura de rutas en Maps
    const handleRouteClick = () => {
        const userAddress = "Current+Location";
        const googleMapsUrl = `https://www.google.com/maps/dir/${userAddress}/${aquaEliteAddress}`;
        const appleMapsUrl = `http://maps.apple.com/?saddr=${userAddress}&daddr=${aquaEliteAddress}`;
        const webMapsUrl = `https://www.google.com/maps?q=${aquaEliteAddress}`;

        // Detección de dispositivo para abrir la app adecuada
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            try {
                window.open(appleMapsUrl, '_blank');
            } catch {
                // Si falla Apple Maps, abrimos la versión web
                window.open(webMapsUrl, '_blank');
            }
        } else {
            window.open(googleMapsUrl, '_blank');
        }
    };

    // Retorna el hook
    return {
        aquaElitePosition,
        defaultIcon,
        handleRouteClick
    };
};