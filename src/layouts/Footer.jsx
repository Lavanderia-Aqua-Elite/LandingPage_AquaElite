//Importa componentes
import classes from '../styles/Footer.module.css';
import Copyright from '../components/Copyright';
import MiniTitle from '../components/MiniTitle';


//Exporta por defecto y crea el componente footer
export default function Footer() {
    return (

        <div className={classes.contentfoot}>

            <hr className={classes.line_contentfoot}/>

            <footer className={classes.mainfoot_contentfoot}>
            
            {/* Contiene el contenido del footer */}
            

                {/* Contiene el Logo de la UNI */}
                

                {/* Contiene la descripción de la lavanderia */}
                <MiniTitle 
                    minititle="Sobre Nosotros"
                />
                

                {/* Contiene la sección de icon-redes */}
                <MiniTitle 
                    minititle="Contactanos"
                />
                

                <hr className={classes.line_contentfoot}/>

                {/* Contiene la sección de copyraigth */}
                <Copyright 
                    company="Aqua Elite" 
                    sinceYear={2025} 
                />

            </footer>

        </div>
    )
}