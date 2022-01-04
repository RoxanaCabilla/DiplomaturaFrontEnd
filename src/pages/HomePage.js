import react from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
         <main className="holder">
             <div className="contenedor">
                <img src="img/home/Portada.jpg" alt="Libreria502" class="homeimg"/>
                <img src="img/home/Portada2.jpg" alt="Libreria502" class="homeimg"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    
                    <h2>Bienvenidos</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae adipisci corrupti aspernatur quos qui similique dolores, voluptatem necessitatibus ratione! Quaerat rerum itaque ut iure unde perferendis praesentium assumenda fuga?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odio, quam animi eligendi dolor neque? Aspernatur sunt exercitationem impedit reprehenderit dolores, consequuntur officiis adipisci a inventore assumenda. Quasi, pariatur inventore.
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