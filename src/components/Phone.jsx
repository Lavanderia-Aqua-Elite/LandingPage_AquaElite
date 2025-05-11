// Importamos los modulos necesarios
import usePhone from '../hooks/usePhone';
import classes from '../styles/Phone.module.css';


export default function Phone({ backgroundImage, children }) {
    // Si necesitáramos lógica, la extraeríamos al hook
    const { phoneStyles } = usePhone(); // Ejemplo de uso de hook

    return (
        <div className={classes.phoneContainer} style={phoneStyles}>
            <div className={classes.phoneScreen}>
                <img 
                    src={backgroundImage} 
                    alt="App movil de la lavanderia" 
                    className={classes.phoneBackground} 
                />
                {children}
            </div>
        </div>
    );
}