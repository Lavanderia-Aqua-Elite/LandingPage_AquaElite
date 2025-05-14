import SubTitle from '../components/SubTitle';
import classes from '../styles/AboutMe.module.css';

export default function AboutMe() {
    return(
        <div className={classes.aboutMeContainer}>
            <section className={classes.aboutMeSection}>
                <div className={classes.titleWrapper}>
                    <SubTitle subtitle="Sobre Nosotros" />
                </div>
            </section>
        </div>
    )
}