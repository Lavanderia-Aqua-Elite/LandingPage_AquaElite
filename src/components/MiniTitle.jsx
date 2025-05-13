// Importa los modulos necesarios
import classes from '../styles/MiniTitle.module.css';

// Exporta por defecto y crea el componente con el hook
export default function MiniTitle( { minititle } ) {
    return(
        <div className={classes.conteinerMin}>
            <h3 className={classes.miniTitle}>{minititle}</h3>
        </div>
    )
}