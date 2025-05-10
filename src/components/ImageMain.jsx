// Importa modulos necesarios
import home from '../hooks/image';
import classes from '../styles/ImageMain.module.css';

// Exporta por defecto y crea el componente
export default function ImageMain() {
    return(
        <div className={classes.conteinerMain}>
            <img
                className={classes.imageMain}
                src={home.homeWebp} 
                alt="Imagen de la empresa" 
            />
        </div>
    )
}