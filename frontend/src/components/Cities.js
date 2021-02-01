import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import lupa from '../assets/lupa.png'
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux'
import citiesActions from '../Redux/Actions/citiesActions';

const Cities = (props) => {
    
    useEffect(() => {
        props.listarCiudades()
        window.scrollTo(0, 0)
    }, [])

    const filtro = e => {

        const valorFiltro= e.target.value
        props.filtrarCiudades(valorFiltro)
    }

    return (
        <>
            <div className="cities">
                <h1 className="citiesTitulo">CITIES</h1>
                <div className="divBuscador">
                    <div><img src={lupa}></img></div>
                    <input type="text" name="buscador" id="buscador" placeholder="Search city" onChange={filtro}></input>
                </div>
                {props.ciudadesFiltradas.length > 0 ?

                    props.ciudadesFiltradas.map(({ name, url, _id }, i) => {
                        return (
                            <div key={i} className="divCiudad" style={{ backgroundImage: `url('${url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                <Link to={`/city/${_id}`} style={{ width: "100%" }}><p className="pCiudades">{name}</p></Link>
                            </div>
                        )
                    })
                    :
                    props.ciudadesFiltradas.length === 0 && <p>No results for your search</p>
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities.cities,
        ciudadesFiltradas: state.cities.ciudadesFiltradas
    }
}

const mapDispatchToProps = {

    listarCiudades: citiesActions.listarCiudades,
    filtrarCiudades: citiesActions.filtrarCiudades
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)