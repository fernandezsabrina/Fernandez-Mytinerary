import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import lupa from '../assets/lupa.png'
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux'
import citiesActions from '../Redux/Actions/citiesActions';

const Cities = (props) => {

    // const [ciudades, setCiudades] = useState([])
    // const [ciudadesBuscador, setCiudadesBuscador] = useState('')
    // const [ciudadFiltrada, setCiudadFiltrada] = useState([])
    // const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        props.listarCiudades()
    }, [])

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('http://localhost:4000/cities')
    //         .then(response => response.json())
    //         .then(data => {
    //             setCiudades(data.respuesta)
    //             setLoading(false)
    //         })
    // }, [])

    // useEffect(() => {
    //     setCiudadFiltrada(
    //         ciudades.filter(ciudad => {
    //             return ciudad.name.toLowerCase().indexOf(ciudadesBuscador.toLowerCase()) == 0
    //         })
    //     )

    // }, [ciudadesBuscador, ciudades])


    return (
        <>
            <div className="cities">
                <h1 className="citiesTitulo">CITIES</h1>
                <div className="divBuscador">
                    <div><img src={lupa}></img></div>
                    <input type="text" name="buscador" id="buscador" placeholder="Search city" onChange={e => (e.target.value.trim())}></input>
                </div>
                {props.cities.length > 0 ?

                    props.cities.map(({ name, url, _id }, i) => {
                        return (
                            <div key={i} className="divCiudad" style={{ backgroundImage: `url('${url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <Link to={`/city/${_id}`} style={{ width: "100%" }}><p className="pCiudades">{name}</p></Link>
                            </div>
                        )
                    })
                    :
                    props.cities.length === 0 && <p>No results for your search</p>
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities.cities
    }
}

const mapDispatchToProps = {

    listarCiudades: citiesActions.listarCiudades
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)