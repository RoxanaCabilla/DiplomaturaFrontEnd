
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>
                    Un 13 de febrero del año 1995 abrimos las puertas de nuestro local en la calle San Martín 502, de allí surge el nombre Librería 502.
                </p>
                <p>
                    Somos un negocio exclusivamente familiar, atendido por sus dueños (Eduardo y Alicia) y algunos de sus hijos, aunque hoy
                    debemos destacar que Gustavo Cabilla, "el pequeño de la familia" está al frente del negocio.
                </p>
                <p>
                    Desde el primer momento fuimos conociendo a nuestros vecinos y clientes; familias y empresas de la zona que confiaron en nosotros.
                </p>
            </div>
            <div>
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/Gustavo.jpg" alt="Gustavo Cabilla" />
                        <h5>Gustavo Cabilla</h5>
                        <h6>Gerente General</h6>
                        <p>Se desempeña como vendedor desde el año 2008. Aportó conocimientos en tecnología, difusión y comunicación.</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/Alicia.jpg" alt="Alicia Sanchón" />
                        <h5>Alicia Sanchón</h5>
                        <h6>Gerente de Ventas</h6>
                        <p>Se desempeña como vendedora. Realiza tareas administrativas y de facturación. </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/Eduardo.jpg" alt="Eduardo Cabilla" />
                        <h5>Eduardo Cabilla</h5>
                        <h6>Gerente de Compras y Contabilidad</h6>
                        <p>Se desempeña como vendedor, y se ocupa de las tareas administrativas, compras y gestión.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default NosotrosPage;