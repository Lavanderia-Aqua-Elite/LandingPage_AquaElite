import { useState } from "react";

// Custom Hook para gestionar los subtítulos
export function useSubtitles() {
    const [subtitles, setSubtitles] = useState({});

    // Función para agregar o actualizar un subtítulo
    const updateSubtitle = (key, text) => {
        setSubtitles(prev => ({
            ...prev,
            [key]: text
        }));
    };

    return { subtitles, updateSubtitle };
}
