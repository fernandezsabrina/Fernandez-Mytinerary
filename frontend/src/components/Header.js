import imagen from '../assets/userblue.png'
import {NavLink} from 'react-router-dom'


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


        </>

    )

}

export default Header