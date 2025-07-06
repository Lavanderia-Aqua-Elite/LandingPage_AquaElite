// src/components/BtnApk.jsx
import useDownloadApk from "../hooks/useDownloadApk";
import styles from "../styles/BtnApk.module.css";

// SVG de ícono de descarga
const DownloadIcon = () => (
  <svg
    className={styles.btnIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a.75.75 0 01.75.75v8.19l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V2.75A.75.75 0 0110 2zM3.25 15a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.25z"
      clipRule="evenodd"
    />
  </svg>
);

export default function BtnApk() {
  const handleDownload = useDownloadApk("myapp.apk");

  return (
    <button onClick={handleDownload} className={styles.btn}>
      <DownloadIcon />
      Instalar App
    </button>
  );
}
