import { useMemo } from "react"; //Importa una libreria de react que sirve para memorizar el cache

//Se crea la contante copyrigth que contiene las propiedades compañia y año
const useCopyright = ({ company, sinceYear }) => {
    //Esta constante se le asigna el valor para memorizar el cache
    const copyrightText = useMemo(() => {
        //Esta constante se le asigna el valor de fecha actual y se recorre en un get
        const currentYear = new Date(). getFullYear();
        //Determina si mostrar ango de años o solo el año actual
        const yearsText = sinceYear && sinceYear !== currentYear
            ? `${sinceYear}-${currentYear}`
            : currentYear;

            //Renderiza el texto formateado
            return `© ${yearsText} ${company}. Todos los derechos reservados.`;
    }, [company, sinceYear]);

    return { copyrightText }; 

};

//Exporta por defecto el copyright
export default useCopyright;