import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import world from "../assets/world.png"
import Itinerary from './Itineraries'

const City = (props) => {
    const [ciudad, setCiudad] = useState({})

    useEffect(() => {
        const id = props.match.params.nombreCiudad
        fetch('http://localhost:4000/city/' + id)
            .then(respuesta => respuesta.json())
            .then(data => setCiudad(data.respuesta))
        window.scrollTo(0, 0)

    }, [])


    return (
        <div className="ciudadSin">
            <div className="tituloCiudad"><h1>{ciudad.name}</h1></div>

            <div className="ciudadUnica" style={{ backgroundImage: `url('${ciudad.url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>

            </div>
            <Itinerary ></Itinerary>
        
            <Link to="/cities">
                <div className="divRedirect">
                    <img src={world} className="mundoCity"></img>
                    <p>Go back to cities</p>
                </div>

            </Link>
        </div>

    )

}

export default City