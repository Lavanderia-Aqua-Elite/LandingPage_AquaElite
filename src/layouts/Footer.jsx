//Importa componentes
import classes from '../styles/Footer.module.css';



//Exporta por defecto y crea el componente footer
export default function Footer() {
    return (

        <div className={classes.contentfoot}>

            <hr className={classes.line_contentfoot}/>

            <footer className={classes.mainfoot_contentfoot}>
            
            {/* Contiene el contenido del footer */}
            

                {/* Contiene el Logo de la UNI */}
                

                {/* Contiene la descripción de la lavanderia */}
                

                {/* Contiene la sección de icon-redes */}
                <h3 className={classes.mintitle_contentfoot}>Contáctanos</h3>
                

                <hr className={classes.line_contentfoot}/>

                {/* Contiene la sección de copyraigth */}
                

            </footer>

        </div>
    )
}