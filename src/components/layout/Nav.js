import {Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Nosotros</Link></li>
                <li><Link to="/">Novedades</Link></li>
                <li><Link to="/">Contacto</Link></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;