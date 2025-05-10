// Importa los modulos necesarios
import classes from '../styles/Header.module.css';
import NameOrganization from "../components/NameOrganization";
import NavList from './NavList';



// Exporta por defecto y crea el componente
export default function Header() {
    return (

        <nav className={classes.header}>
            {/* Nombre de la organización */}
            <NameOrganization />
            <div className={classes.content}>
                {/* Lista expansiva */}
                <NavList />
            </div>
        </nav>

    )

}