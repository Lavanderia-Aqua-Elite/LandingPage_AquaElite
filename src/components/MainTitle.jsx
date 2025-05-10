// Importa los modulos necesarios
import classes from '../styles/MainTitle.module.css';

// Exporta por defecto y crea el componente
export default function MainTitle({ maintitle }) {
    return (
        <div className={classes.conteinerMain}>
            <h1 className={classes.mainTitle}>{maintitle}</h1>
        </div>
    )
}