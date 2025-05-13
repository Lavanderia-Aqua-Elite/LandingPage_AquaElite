// Importa los modulos necesarios
import CardService from '../components/CardService';
import SubTitle from '../components/SubTitle';
import classes from '../styles/WhatWeDo.module.css';
import laundryIco from '../hooks/image';
import dryleanerIco from '../hooks/image';

// Exporta por defecto y crea el componente
export default function WhatWeDo() {
    return (
        <div className={classes.contentService}>
            
            <section className="sectionService">
                    <div>
                        <SubTitle subtitle="¿Qué Ofrecemos?" />
                    </div>
                    <div>
                        <CardService
                            titlecard="Lavandería"
                            imagacard={laundryIco.laundryPng}
                            textcard="Lava y cuida tu ropa con nuestro servicio de lavandería de confianza."
                        />
                        <CardService
                            titlecard="Tintorería"
                            imagacard={dryleanerIco.dryleanerPng}
                            textcard="Deja en nuestras manos la limpieza de tus prendas delicadas y costosas."
                        />
                        <CardService
                            titlecard="Planchadura"
                            textcard="Ropa perfectamente planchada, lista para usar y sin esfuerzo."
                        />
                        <CardService
                            titlecard="Mantenimiento"
                            textcard="Ofrecemos servicios de mantenimiento para que tu ropa y maquinaria estén en perfectas"
                        />
                        <CardService
                            titlecard="Ventas de productos"
                            textcard="Encuentra los mejores productos de limpieza y cuidado en un solo lugar, ¡a precios increíbles!"
                        />
                    </div>
            </section>
        </div>
    )
}