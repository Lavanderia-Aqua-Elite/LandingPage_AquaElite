// Importa los modulos necesarios
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';
import ImageMain from '../components/ImageMain';
import MainTitle from '../components/MainTitle';



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
                    <MainTitle 
                        maintitle="Lavandería,
                        tintorería,
                        Costurería,
                        Plancharía,
                        Mantenimiento y
                        Productos de
                        Lavado y Secadoras" 
                    />
                </main>
            </div>
        </>
    )
}