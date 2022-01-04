import {NavLink} from 'react-router-dom';
import '../../styles/components/layout/Nav.css'
const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
            <ul>
                {/* <li><NavLink activeClassName = "activo" exact to="/">Home</NavLink></li> */}
                {/* <li><NavLink activeClassName = "activo" exact to ="/nosotros">Nosotros</NavLink></li> */}
                {/* <li><NavLink activeClassName = "activo" exact to ="/novedades">Novedades</NavLink></li> */}
                {/* <li><NavLink activeClassName = "activo" exact to ="/contacto">Contacto</NavLink></li> */}
                <li><NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Home</NavLink></li>
                <li><NavLink to="/nosotros" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Nosotros</NavLink></li>
                <li><NavLink to="/novedades" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Novedades</NavLink></li>
                <li><NavLink to="/contacto" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Contacto</NavLink></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;