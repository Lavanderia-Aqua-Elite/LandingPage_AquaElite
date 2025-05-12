// Importa los modulos necesarios
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';
import ImageMain from '../components/ImageMain';
import movilappPreview from '../hooks/image';
import Phone from '../components/Phone';
import MainTitle from '../components/MainTitle'
import WhatWeDo from './WhatWeDo';


// Exporta por defecto el componente y lo crea
export default function Home() {
    return (
        <>
            {/* Contenedor */}
            <div className={classes.conteinerHome}>
                <header>
                    <Header />
                </header>

                <main className={classes.mainContent}>
                    <section className={classes.sectionHome}>
                    {/* Fondo */}
                        <div className={classes.bgHome}>
                            <ImageMain />
                        </div>

                        {/* Contenido */}
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

                        {/* Teléfono (derecha) */}
                        <div className={classes.contentMovilHome}>
                            <Phone backgroundImage={movilappPreview.movilJpg}/>
                        </div>
                    </section>

                </main>

                <section>
                    <WhatWeDo />
                </section>

            </div>
        </>
    )
}