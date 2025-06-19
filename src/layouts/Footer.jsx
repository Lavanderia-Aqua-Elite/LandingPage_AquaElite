// Importa componentes
import classes from '../styles/Footer.module.css';
import Copyright from '../components/Copyright';
import MiniTitle from '../components/MiniTitle';
import IconSocial from '../components/IconSocial';


// Exporta por defecto y crea el componente footer
export default function Footer() {
    return (
        <div className={classes.contentfoot}>
            <hr className={classes.line_contentfoot}/>

            <footer className={classes.mainfoot_contentfoot}>
                {/* Sección de redes sociales */}
                <div className={classes.socialSection}>
                    <MiniTitle 
                        minititle="Síguenos"
                    />
                    <IconSocial />
                </div>

                {/* Sección de contacto */}
                <div className={classes.contactSection}>
                    <MiniTitle 
                        minititle="Contáctanos"
                    />
                    {/* Aquí podrías agregar otros elementos de contacto */}
                </div>

                <hr className={classes.line_contentfoot}/>

                {/* Sección de copyright */}
                <Copyright 
                    company="Aqua Elite" 
                    sinceYear={2025} 
                />
            </footer>
        </div>
    )
}