// Importa los modulos necesarios
import classes from '../styles/NavBar.module.css';
import NameOrganization from "../components/NameOrganization";
import ToggleBtn from "../components/ToggleBtn";
import NavList from '../components/NavList';



// Exporta por defecto y crea el componente
export default function Header() {
    return (

        <nav className={classes.nav}>
            {/* Nombre de la organización */}
            <NameOrganization />
            <div className={classes.content}>
                {/* Lista expansiva */}
                <NavList />
                {/* Botón expansivo */}
                <ToggleBtn />
            </div>
        </nav>

    )

}