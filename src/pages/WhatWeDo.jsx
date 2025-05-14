import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import CardService from '../components/CardService';
import SubTitle from '../components/SubTitle';
import classes from '../styles/WhatWeDo.module.css';
import image from '../hooks/image';
import 'react-horizontal-scrolling-menu/dist/styles.css'; // No olvides importar los estilos

export default function WhatWeDo() {
    return (
        <div className={`${classes.contentService} ${classes.preventCollapse}`}>
            <section className={classes.sectionService}>
                <div className={classes.subtitleService}>
                    <SubTitle subtitle="¿Qué Ofrecemos?" />
                </div>
                
                <ScrollMenu>
                    <div style={{ display: 'flex', gap: '1.5rem', padding: '0 1.5rem' }}>
                        <CardService
                            titlecard="Lavandería"
                            imagacard={image.laundryPng}
                            textcard="Lava y cuida tu ropa con nuestro servicio de lavandería de confianza."
                        />
                        <CardService
                            titlecard="Tintorería"
                            imagacard={image.dryleanerPng}
                            textcard="Deja en nuestras manos la limpieza de tus prendas delicadas y costosas."
                        />
                        <CardService
                            titlecard="Planchadura"
                            imagacard={image.laundryServicePng}
                            textcard="Ropa perfectamente planchada, lista para usar y sin esfuerzo."
                        />
                        <CardService
                            titlecard="Mantenimiento"
                            imagacard={image.maintenancePng}
                            textcard="Ofrecemos servicios de mantenimiento para que tu ropa y maquinaria estén en perfectas"
                        />
                        <CardService
                            titlecard="Ventas de productos"
                            imagacard={image.shopPng}
                            textcard="Encuentra los mejores productos de limpieza y cuidado en un solo lugar, ¡a precios increíbles!"
                        />
                    </div>
                </ScrollMenu>
            </section>
        </div>
    )
}