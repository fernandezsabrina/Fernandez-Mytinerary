import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import lupa from '../assets/lupa.png'
import axios from 'axios'

const Cities = () => {

    const [ciudades, setCiudades] = useState([])
    const [ciudadesFiltradas, setCiudadesFiltradas] = useState('')
    const [ciudadFiltrada, setCiudadFiltrada] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cities')
            .then(response => response.json())
            .then(data => setCiudades(data.respuesta))


    }, [])

    useEffect(() => {
        setCiudadFiltrada(
            ciudades.filter(ciudad => {
            return ciudad.name.toLowerCase().indexOf(ciudadesFiltradas.toLowerCase()) == 0
        })
        )

}, [ciudadesFiltradas, ciudades])



return (
    <>
        <div className="cities">
            <h1 style={{ color: "#894789", fontWeight: "bold", fontSize: "3vw" }}>CITIES</h1>
            <div className="divBuscador">
                <div><img src={lupa}></img></div>
                <input type="text" name="buscador" id="buscador" placeholder="Search city" onChange={e => setCiudadesFiltradas(e.target.value.trim())}></input>
            </div>
            
            {ciudadFiltrada.map(({ name, url, _id }) => {
                return (
                    <div className="divCiudad" style={{ backgroundImage: `url('${url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <Link to={`/city/${_id}`} style={{ width: "100%" }}><p style={{
                            width: "100%", color: "white", height: "7vh", display: "inlineBlock",
                            backgroundColor: "#89478981", textAlign: "center"
                        }}>{name}</p></Link>
                    </div>
                )

            })}

        </div>
    </>
)
}

export default Cities