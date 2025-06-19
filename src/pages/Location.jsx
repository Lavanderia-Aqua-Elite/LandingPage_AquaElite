// Importa modulos por defecto
import Header from "../layouts/Header";

// Exporta y crea por defecto el locationpage
export default function Location() {
    return(
        <>
            {/* Contenedor */}
            <div className="containerLocation">
                <header>
                    <Header />
                </header>
            </div>
        </>
    )
}