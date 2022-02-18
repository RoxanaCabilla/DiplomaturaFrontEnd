import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="contenedor">
               <img src="img/home/Libre3.jpg" alt="Libreria502" className="homeimg" />
                {/* <img src="img/home/Portada2.jpg" alt="Libreria502" className="homeimg" /> */}
                {/* <img src="img/home/Portada3.jpg" alt="Libreria502" className="homeimg" /> */}
            </div>
            <div className="columnas">
                <div className="bienvenidos left">

                    <h2>Bienvenidos!</h2>
                    <p>
                        Nuestro local está ubicado muy cerca del centro de la ciudad de Ramos Mejía.
                        En la esquina de Av. San Martín y Pizurno,  a sólo 5 cuadras de la estación de tren.
                    </p>
                    <p>
                        Tenemos un amplio horario de atención, sobre todo en época escolar.
                    </p>
                    <p>
                        Contamos con varias máquinas fotocopiadorase, impresoras y anilladora para armado de apuntes. 
                    </p>
                    <p>
                        Somos un equipo que desde hace más de 25 años brindamos servicio, productos de calidad y los mejores precios.
                    </p>
                    <p>
                        Estos son algunos de nuestros principales clientes: Bersa, Dole Racing, Lumen Glass, AutoBiz, Club Estudiantil Porteño.
                        Colegio Jean Piaget, Jardín 901, Instituto Pringles.
                    </p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Excelente atención</span>
                        <span className="autor">Juan Perez jperez@hotmail.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;