// Importa los modulos necesarios
import classes from '../styles/CardService.module.css';

// Exporta el componente por defecto y lo crea
export default function CardService({ titlecard, imagacard, textcard }) {
    return (
        <div className={classes.boxCardService}>

            <div className={classes.titleCardService}>
                <h4 className={classes.titleCard}>{titlecard}</h4>
            </div>
            <div className={classes.contentImgCardService}>
                <img className={classes.imgCardService} src={imagacard} alt={titlecard} />
            </div>
            <div className={classes.contentTextCardService}>
                <p className={classes.textCardService}>{textcard}</p>
            </div>

        </div>
    )
}