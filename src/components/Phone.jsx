// Importamos los modulos necesarios
import './PhoneComponent.css';
import usePhone from './usePhone'; 

export default function Phone({ backgroundImage, children }) {
    // Si necesitáramos lógica, la extraeríamos al hook
    const { phoneStyles } = usePhone(); // Ejemplo de uso de hook

    return (
        <div className="phone-container" style={phoneStyles}>
            <div className="phone-screen">
                <img 
                    src={backgroundImage} 
                    alt="Pantalla del móvil" 
                    className="phone-background" 
                />
                {children}
            </div>
        </div>
    );
}