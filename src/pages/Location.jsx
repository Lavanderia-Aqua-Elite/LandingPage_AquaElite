// Importa modulos
import Header from "../layouts/Header";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Location.module.css';
import { useLocation } from '../hooks/useLocation';

// Crea el componente que crea el mapa
export default function Location() {
    const { aquaElitePosition, defaultIcon, handleRouteClick } = useLocation();

    return (
        <div className={styles.containerLocation}>
            <header>
                <Header />
            </header>

            <main className={styles.mapSection}>
                <section className={styles.mapContainer}>
                    <h1 className={styles.mapTitle}>Visítanos en AquaElite</h1>
                    
                    <div className={styles.mapContent}>
                        {/* Mapa interactivo */}
                        <MapContainer 
                            center={aquaElitePosition} 
                            zoom={16}  // Zoom reducido para mejor contexto
                            className={styles.map}
                            scrollWheelZoom={true}
                            dragging={true}
                            doubleClickZoom={true}
                            minZoom={14}  // Límite mínimo de zoom
                            maxZoom={18}  // Límite máximo de zoom
                            style={{ height: '500px', width: '100%' }}  // Tamaño aumentado
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            
                            {/* Marcador con la ubicación exacta */}
                            <Marker position={aquaElitePosition} icon={defaultIcon}>
                                <Popup>
                                    <strong>AquaElite</strong><br />
                                    Av. Independencia #746<br />
                                    Entre Arista y Cerdan<br />
                                    Boca del Río, Veracruz<br />
                                    <button 
                                        onClick={handleRouteClick}
                                        className={styles.popupButton}
                                    >
                                        Cómo llegar
                                    </button>
                                </Popup>
                            </Marker>
                        </MapContainer>

                        {/* Botón para abrir ruta */}
                        <button 
                            onClick={handleRouteClick} 
                            className={styles.routeButton}
                        >
                            <span className={styles.buttonIcon}>📍</span> 
                            Abrir Ruta en Maps
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}