// Importa los modulos necesarios
import classes from '../styles/Home.module.css';
import Header from '../layouts/Header';



// Exporta por defecto el componente y lo crea
export default function Home() {
    return (
        <>
            {/* Contenedor */}
            <div className={classes.conteinerHome}>
                <header>
                    <Header />
                </header>
                <main>
                    
                </main>
            </div>
        </>
    )
}