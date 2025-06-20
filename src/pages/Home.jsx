// Importa los modulos necesarios
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';
import ImageMain from '../components/ImageMain';
import image from '../hooks/image';
import Phone from '../components/Phone';
import MainTitle from '../components/MainTitle';
import AboutUs from './AboutUs';
import Footer from '../layouts/Footer';

// Exporta y crea por defecto el componente
export default function Home() {
    const location = useLocation();

    useEffect(() => {
        // Maneja el scroll al cargar la página con hash o state
        const scrollToSection = () => {
            const hash = window.location.hash;
            const sectionId = hash || location.state?.scrollTo;
            
            if (sectionId) {
                // Corrige el ID eliminando el # extra si existe
                const cleanId = sectionId.replace(/^#+/, '');
                const element = document.getElementById(cleanId);
                
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100); // Pequeño delay para asegurar la renderización
                }
            }
        };

        scrollToSection();
    }, [location.state, location.hash]);

    return (
        <>
            <div className={classes.conteinerHome}>
                <header>
                    <Header />
                </header>

                <main className={classes.mainContent}>
                    {/* Sección Inicio */}
                    <section id="inicio" className={classes.sectionHome}>
                        <div className={classes.bgHome}>
                            <ImageMain />
                        </div>

                        <div className={classes.contentHome}>
                            <div className={classes.titleHome}>
                                <MainTitle 
                                    maintitle="Lavandería,  
                                    tintorería,  
                                    planchadura,
                                    Mantenimiento y
                                    Venta de Productos" 
                                />
                            </div>
                        </div>

                        <div className={classes.contentMovilHome}>
                            <Phone backgroundImage={image.movilJpg}/>
                        </div>
                    </section>

                    {/* Sección Nosotros - Ejemplo de cómo agregar más secciones */}
                    <section id="nosotros" className={classes.sectionAbout}>
                        <AboutUs />
                    </section>
                </main>

                {/* Footer */}
                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}