// Importa los modulos necesarios
import classes from '../styles/CardService.module.css';

// Exporta el componente por defecto y lo crea
export default function CardService({ titlecard, imagacard, textcard }) {
    return (
        <div className="boxCardService">

            <div className="titleCardService">
                <h4 className="titleCard">{titlecard}</h4>
            </div>
            <div className="contentImgCardService">
                <img className="imgCardService" src={imagacard} alt={titlecard} />
            </div>
            <div className="contentTextCardService">
                <p className="textCardService">{textcard}</p>
            </div>

        </div>
    )
}