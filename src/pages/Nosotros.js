import react from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reprehenderit beatae iste cum id accusamus dolor. Error ipsam, excepturi fugiat aut ad numquam repudiandae repellat recusandae quis aliquid odit suscipit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore placeat repudiandae ducimus unde molestias magnam sit cum explicabo voluptas assumenda illo, repellendus corporis ab quis at animi dignissimos quae harum.</p>
            </div>
            <div>
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="Gustavo Cabilla" />
                        <h5>Gustavo Cabilla</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, itaque asperiores qui est, illo ratione earum explicabo sunt accusantium laboriosam aliquam, cum laborum molestias iste voluptatem eveniet quos enim nemo?</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="Alicia Sanchón" />
                        <h5>Alicia Sanchón</h5>
                        <h6>Gerente de Ventas</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, itaque asperiores qui est, illo ratione earum explicabo sunt accusantium laboriosam aliquam, cum laborum molestias iste voluptatem eveniet quos enim nemo?</p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="Eduardo Cabilla" />
                        <h5>Eduardo Cabilla</h5>
                        <h6>Gerente de Compras y Contabilidad</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, itaque asperiores qui est, illo ratione earum explicabo sunt accusantium laboriosam aliquam, cum laborum molestias iste voluptatem eveniet quos enim nemo?</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default NosotrosPage;