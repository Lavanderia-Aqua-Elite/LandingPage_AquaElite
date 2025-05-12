// Importa los modulos necesarios
import CardService from '../components/CardService';
import SubTitle from '../components/SubTitle';
import classes from '../styles/WhatWeDo.module.css';

// Exporta por defecto y crea el componente
export default function WhatWeDo() {
    return (
        <div className={classes.contentService}>
            
            <section className="sectionService">
                    <div>
                        <SubTitle subtitle="¿Qué Ofrecemos?" />
                    </div>
                    <div>
                        <CardService />
                    </div>
            </section>
        </div>
    )
}