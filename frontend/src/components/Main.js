import Carrusel from "../components/Carrusel"
import flecha from '../assets/bluearrow.png'
import foto1 from '../assets/foto1.png'
import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'
import { NavLink, Link } from 'react-router-dom'

const Main = () => {

    return (
        <>
            <main>
                <div className="fotosMain">
                    <div><img src={foto1} className="fotosInicio"></img></div>
                    <div><img src={foto2} className="fotosInicio"></img></div>
                    <div><img src={foto3} className="fotosInicio"></img></div>
                </div>
                <div className="divFlecha">
                    <Link to="/cities">
                        <div><img className="flecha" src={flecha}></img></div>
                    </Link>
                    <Link to="/cities">
                        <p className="textoFlecha">Let's plan your next trip!</p>
                    </Link>

                </div>

                <Carrusel />
            </main>
        </>

    )

}

export default Main