// Importa los modulos necesarios
import classes from '../styles/SubTitle.module.css';

// Exporta y crea el componente por defecto
export default function SubTitle({ subtitle }) {
    return(
        <div className={classes.conteinerSub}>
            <h2 className={classes.subTitle}>{subtitle}</h2>
        </div>
    )
}