import react from 'react';

const Novedades = (props) => {
    return (
        <main className="holder">
            <h2>Novedades</h2>
            <div className="novedades">
                <h3>Pintura a la Tiza</h3>
                <h4>eQ</h4>
                <img src="img/Novedades/eQ.jpg" alt="" />

                <p> Terminación ultramate. Capacidad cubritiva y de adherencia a múltiples soportes. Fácil de lijar, no se oxida.</p>
                <hr></hr>
            </div>
            <div className="novedades">
                <h3>Auriculares</h3>
                <h4>Noga 904</h4>
                <img src="img/Novedades/Auriculares.JPG" alt="" />
                <ul>
                    <li>Auriculares cerrados supra aurales (on ear) </li>
                    <li>Auriculares de 4 cm de diámetro </li>
                    <li>Máximo poder input: 100 mW </li>
                    <li>Colores: rojo & negro </li>
                    <li>Cable de 1.2 metros en Y </li>
                </ul>
                <hr></hr>
            </div>
        </main>
    );
}
export default Novedades;