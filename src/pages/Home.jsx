// Importa los modulos necesarios
import classes from '../styles/Home.module.css';
import NavBar from '../layouts/NavBar';



// Exporta por defecto el componente y lo crea
export default function Home() {
    return (
        <>
            {/* Contenedor */}
            <div className={classes.conteinerHome}>
                <main>
                    <NavBar />
                </main>
            </div>
        </>
    )
}