// Importa los modulos necesarios
import CardService from '../components/CardService';
import SubTitle from '../components/SubTitle';
import classes from '../styles/WhatWeDo.module.css';
import laundryIco from '../hooks/image';
import dryleanerIco from '../hooks/image';
import laundryServiceIco from '../hooks/image';
import MaintenanceIco from '../hooks/image';
import shopIco from '../hooks/image';
import MiniTitle from '../components/MiniTitle';
import Text from '../components/Text';

// Exporta por defecto y crea el componente
export default function WhatWeDo() {
    return (
        <div className={classes.contentService}>
            
            <section className="sectionService">
                    <div className='subtitleService'>
                        <SubTitle subtitle="¿Qué Ofrecemos?" />
                    </div>
                    <div className="contentCardService">
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
                            imagacard={laundryServiceIco.laundryServicePng}
                            textcard="Ropa perfectamente planchada, lista para usar y sin esfuerzo."
                        />
                        <CardService
                            titlecard="Mantenimiento"
                            imagacard={MaintenanceIco.MaintenancePng}
                            textcard="Ofrecemos servicios de mantenimiento para que tu ropa y maquinaria estén en perfectas"
                        />
                        <CardService
                            titlecard="Ventas de productos"
                            imagacard={shopIco.shopPng}
                            textcard="Encuentra los mejores productos de limpieza y cuidado en un solo lugar, ¡a precios increíbles!"
                        />
                    </div>
                    <div className='contenService'>
                        <div className='mintitleService'>
                            <MiniTitle minititle="Misión" />
                        </div>
                        <div className='conteinerDescription'>
                            <p className='textDescription'>
                                Brindar servicios de lavandería de alta calidad, ofreciendo soluciones eficientes y accesibles que garanticen la limpieza y el cuidado óptimo de las prendas de nuestros clientes, con un enfoque en la puntualidad, el respeto al medio ambiente y la satisfacción del cliente.
                            </p>
                        </div>
                        <div className='mintitleService'>
                            <MiniTitle minititle="Visión" />
                        </div>
                        <div className='conteinerDescription'>
                            <p className='textDescription'>
                                Ser la lavandería líder en la región, reconocida por la calidad de nuestros servicios, el compromiso con la sostenibilidad y la atención personalizada que ofrecemos, creando relaciones duraderas con nuestros clientes y colaboradores.
                            </p>
                        </div>
                        <div className='mintitleService'>
                            <MiniTitle minititle="Objetivo" />
                        </div>
                        <div className='conteinerDescription'>
                            <p className='textDescription'>
                                Ofrecer servicios de lavandería rápidos y eficientes, utilizando productos ecológicos y procesos innovadores que garanticen la satisfacción del cliente, al mismo tiempo que contribuimos al cuidado del medio ambiente.
                            </p>
                        </div>
                        <div className='mintitleService'>
                            <MiniTitle minititle="Valores" />
                        </div>
                        <div className='conteinerDescription'>
                            <ul className='listDescription'>
                                <li className='itemDescription'>
                                    Calidad: Nos esforzamos por ofrecer siempre los mejores resultados en cada servicio.
                                </li>
                                <li className='itemDescription'>
                                    Responsabilidad Ambiental: Utilizamos productos y procesos que minimizan el impacto ecológico.
                                </li>
                                <li className='itemDescription'>
                                    Compromiso: Cumplimos puntualmente con los tiempos de entrega y los estándares de limpieza.
                                </li>
                                <li className='itemDescription'>
                                    Honestidad: Actuamos con transparencia y ética en todas nuestras operaciones.
                                </li>
                                <li className='itemDescription'>
                                    Servicio al Cliente: Nos enfocamos en superar las expectativas de nuestros usuarios con amabilidad y profesionalismo.
                                </li>
                                <li className='itemDescription'>
                                    Innovación: Estamos en constante evolución para mejorar nuestros procesos y servicios.
                                </li>
                            </ul>
                        </div>
                    </div>
            </section>
        </div>
    )
}