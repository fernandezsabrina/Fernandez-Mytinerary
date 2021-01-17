import Carrusel from "../components/Carrusel"
import flecha from '../assets/bluearrow.png'
import foto1 from '../assets/foto1.png'
import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'

const Main = () => {
  
    return (
        <>
            <main>
                <div className="fotosMain">
                    <div><img src={foto1}></img></div>
                    <div><img src={foto2}></img></div>
                    <div><img src={foto3}></img></div>
                </div>
                <div ><img className="flecha" src={flecha}></img></div>
                <p className="textoFlecha">Let's plan your next trip!</p>
                <Carrusel />
            </main>
        </>

    )

}

export default Main