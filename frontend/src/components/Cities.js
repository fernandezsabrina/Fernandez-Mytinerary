import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import lupa from '../assets/lupa.png'

const Cities = () => {

    const [ciudades, setCiudades] = useState([])
    const [ciudadesFiltradas, setCiudadesFiltradas] = useState('')
    const [ciudadFiltrada, setCiudadFiltrada] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/cities')
            .then(response => response.json())
            .then(data => setCiudades(data.respuesta),
                setLoading(false))


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
                <h1 className="citiesTitulo">CITIES</h1>
                <div className="divBuscador">
                    <div><img src={lupa}></img></div>
                    <input type="text" name="buscador" id="buscador" placeholder="Search city" onChange={e => setCiudadesFiltradas(e.target.value.trim())}></input>
                </div>
                {ciudadFiltrada.map(({ name, url, _id }) => {
                    return (
                        <div className="divCiudad" style={{ backgroundImage: `url('${url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <Link to={`/city/${_id}`} style={{ width: "100%" }}><p className="pCiudades">{name}</p></Link>
                        </div>
                    )
                })}

                {ciudadFiltrada.length === 0 && <p>No results for your search</p>}

            </div>
        </>
    )
}

export default Cities