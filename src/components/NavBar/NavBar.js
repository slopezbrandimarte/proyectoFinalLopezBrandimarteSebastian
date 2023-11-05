import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import 'bulma/css/bulma.css'



function NavBar () {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <Link to="/">
                <h3 className="tittle">OM SHANTI</h3>
            </Link>

            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={"/categoria/indumentaria" } className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={"/categoria/sahumerio"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sahumerios</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={"/categoria/decoracion"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Decoracion</NavLink>
                    </div>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>

        </nav>

    )
}

export default NavBar