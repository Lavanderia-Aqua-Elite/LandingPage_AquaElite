import useCopyright from "../hooks/useCopyright"; //Importa el hook

//Crea la función copy y almacena unos atributos y lo exporta por defecto el componente
export default function Copyright({ company, sinceYear }) {
    //Usando el hook
    const { copyrightText } = useCopyright({ company, sinceYear }); //Se llama al hook

    return (

        <div className="containermain">

            {copyrightText} {/* Renderiza el texto del copy */}

        </div>

    );
}