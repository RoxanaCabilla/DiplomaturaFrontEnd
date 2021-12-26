import {link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
            <ul>
                <li><a class= "activo" href="Index.html">Home</a></li>
                <li><a href="Nosotros.html">Nosotros</a></li>
                <li><a href="Novedades.html">Novedades</a></li>
                <li><a href="Contacto.html">Contacto</a></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;