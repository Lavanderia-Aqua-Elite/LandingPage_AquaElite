// Importar modulos
// components/IconSocial.jsx
import iconSocial from '../hooks/iconSocial';
import classes from '../styles/IconSocial.module.css';

// Crea y exporta el componente de IconSocial
export default function IconSocial() {
    const icons = iconSocial(classes);

    return (
        <div className={classes.container}>
            {icons.map((item, idx) => (
                <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                >
                {item.icon}
                </a>
            ))}
        </div>
    );
}