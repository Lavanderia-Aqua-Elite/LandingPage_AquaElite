// src/components/BtnApk.jsx
import useDownloadApk from "../hooks/useDownloadApk";
import styles from "../styles/BtnApk.module.css";

// Exporta y crea por defecto el botón para instalar el apk
export default function BtnApk() {
    const handleDownload = useDownloadApk("myapp.apk");

    return (
        <button onClick={handleDownload} className={styles.btn}>
            Descargar APK
        </button>
    );
}
