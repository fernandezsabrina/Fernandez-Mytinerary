import imagen from '../assets/userblue.png'
import logo from '../assets/logomytinerary.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <header>

                <div><img className="fotoUsuario" src={imagen}></img></div>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/cities">Cities</NavLink>
                </nav>

            </header>
            <div className="divLogo">
                <img className="fotoLogo" src={logo}></img>
                <p>Find your perfect trip, designed by insiders who know and love their cities.</p>


            </div>

        </>
    )
}

export default Header