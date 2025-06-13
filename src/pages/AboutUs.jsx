// Importa los modulos
import SubTitle from "../components/SubTitle";
import classes from "../styles/AboutUs.module.css"; 

// Crea y exporta por defecto el componente
export default function AboutUs() {
    return (
        <section id="nosotros" className={classes.aboutSection}>
            <div className={classes.contentContainer}>
                <SubTitle subtitle="Sobre Nosotros" />
                
                <div className={classes.aboutContent}>
                    <p className={classes.aboutText}>
                        En <strong>AquaElite</strong> nos especializamos en servicios de lavandería y tintorería profesional, 
                        ofreciendo soluciones de limpieza y cuidado para todo tipo de prendas. 
                        Con más de 10 años de experiencia, garantizamos calidad y atención personalizada.
                    </p>
                    
                    <div className={classes.highlights}>
                        <div className={classes.highlightItem}>
                            <span>🧺</span>
                            <p>Lavado profesional</p>
                        </div>
                        <div className={classes.highlightItem}>
                            <span>👔</span>
                            <p>Tintorería especializada</p>
                        </div>
                        <div className={classes.highlightItem}>
                            <span>⚙️</span>
                            <p>Mantenimiento experto</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}