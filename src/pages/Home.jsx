// Importa los modulos necesarios
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';
import ImageMain from '../components/ImageMain';
import movilappPreview from '../hooks/image';
import Phone from '../components/Phone';

// Exporta por defecto el componente y lo crea
export default function Home() {
    return (
        <>
            {/* Contenedor */}
            <div className={classes.conteinerHome}>
                <header>
                    <Header />
                </header>
                {/* Contenedor del main */}
                <main className={classes.mainContent}>
                    <ImageMain />
                    <Phone backgroundImage={movilappPreview.movilJpg}/>
                </main>

            </div>
        </>
    )
}