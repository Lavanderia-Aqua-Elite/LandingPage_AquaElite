// Importa los modulos necesarios
import classes from '../styles/NavBar.module.css';
import NameOrganization from "../components/NameOrganization";
import ToggleBtn from "../components/ToggleBtn";
import ListExpansive from "../components/ListExpansive";



// Exporta por defecto y crea el componente
export default function NavBar() {
    return (

        <nav className={classes.nav}>
            {/* Nombre de la organización */}
            <NameOrganization />
            <div className={classes.content}>
                {/* Lista expansiva */}
                <ListExpansive />
                {/* Botón expansivo */}
                <ToggleBtn />
            </div>
        </nav>

    )

}