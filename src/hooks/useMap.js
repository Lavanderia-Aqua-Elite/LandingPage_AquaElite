import { useEffect, useState, useCallback } from 'react';

export default function useMap(containerId, initialPosition, markerText) {
    const [map, setMap] = useState(null);
    const [mapError, setMapError] = useState(null);

    // Función para limpiar el mapa
    const cleanUpMap = useCallback(() => {
        if (map) {
            map.remove();
            setMap(null);
        }
    }, [map]);

    useEffect(() => {
        // Variable para verificar si el efecto está montado
        let isMounted = true;

        // Cargar Leaflet dinámicamente
        const loadLeaflet = () => {
            return new Promise((resolve, reject) => {
                if (window.L) {
                    resolve();
                    return;
                }

                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
                link.crossOrigin = '';
                link.onerror = () => reject(new Error('Failed to load Leaflet CSS'));
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
                script.crossOrigin = '';
                script.onload = () => {
                    if (isMounted) resolve();
                };
                script.onerror = () => reject(new Error('Failed to load Leaflet JS'));
                document.body.appendChild(script);
            });
        };

        // Inicializar mapa
        const initMap = async () => {
            try {
                await loadLeaflet();
                
                // Verificar si el contenedor existe
                const container = document.getElementById(containerId);
                if (!container) {
                    throw new Error(`Map container with id '${containerId}' not found`);
                }

                // Verificar si Leaflet está cargado correctamente
                if (!window.L) {
                    throw new Error('Leaflet library not available');
                }

                // Crear instancia del mapa
                const mapInstance = window.L.map(containerId).setView(initialPosition, 15);
                
                // Añadir capa de tiles
                window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 19,
                }).addTo(mapInstance);

                // Añadir marcador
                window.L.marker(initialPosition)
                    .addTo(mapInstance)
                    .bindPopup(markerText)
                    .openPopup();

                if (isMounted) {
                    setMap(mapInstance);
                    setMapError(null);
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error initializing map:', error);
                    setMapError(error.message);
                }
            }
        };

        initMap();

        return () => {
            isMounted = false;
            cleanUpMap();
        };
    }, [containerId, initialPosition, markerText, cleanUpMap]);

    return { map, error: mapError };
}