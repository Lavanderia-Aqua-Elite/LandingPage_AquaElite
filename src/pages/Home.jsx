// Importa los modulos necesarios
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';
import MainTitle from '../components/MainTitle';
import ImageMain from '../components/ImageMain';

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
                </main>

            </div>
        </>
    )
}