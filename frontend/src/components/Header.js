import imagen from '../assets/userblue.png'
import logo from '../assets/logomytinerary.png'


const Header = () => {

    return (
        <>
            <header>
                <div><img className="fotoUsuario" src={imagen}></img></div>
                <nav>
                    <a>Home</a>
                    <a>Cities</a>
                    <a>Contact</a>
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