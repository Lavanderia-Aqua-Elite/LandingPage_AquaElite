// Importa los modulos necesarios
import { useState } from "react";

export default function useToggle(initialState = false) {
    const [isExpanded, setIsExpanded] = useState(initialState);

    const toggle = () => {
        setIsExpanded(!isExpanded);
    };

    return [isExpanded, toggle];
}