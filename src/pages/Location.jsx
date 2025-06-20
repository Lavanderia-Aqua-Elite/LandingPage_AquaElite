import Header from "../layouts/Header";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Location.module.css';
import { useLocation } from '../hooks/useLocation';

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
                            zoom={18}  // Zoom más cercano para mejor detalle
                            className={styles.map}
                            scrollWheelZoom={true}  // Permitir zoom con rueda del mouse
                            dragging={true}  // Permitir arrastrar el mapa
                            doubleClickZoom={true}  // Permitir zoom con doble click
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