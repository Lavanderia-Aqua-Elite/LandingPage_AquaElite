// Importamos modulos
import classes from '../styles/IconSocial.module.css';
import { useSocialLinks } from '../hooks/useSocialLinks';

// Exporta y crea el componente
export default function IconSocial() {
  const socialLinks = useSocialLinks();

  return (
    <div className={classes.socialContainer}>
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialLink}
          aria-label={item.title}
          title={item.title}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}