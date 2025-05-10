// Importa modulos necesarios
import home from '../hooks/image';

// Exporta por defecto y crea el componente
export default function ImageMain() {
    return(
        <div className="conteinerMain">
            <img
                className="imageMain"
                src={home.homeWebp} 
                alt="Imagen de la empresa" 
            />
        </div>
    )
}