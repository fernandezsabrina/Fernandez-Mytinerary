import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import world from "../assets/world.png"
import Itinerary from './Itineraries'
import { connect } from 'react-redux'
import citiesActions from '../Redux/Actions/citiesActions'
import itinerariesActions from '../Redux/Actions/itineraryActions'

const City = (props) => {
    const [ciudad, setCiudad] = useState({})

    useEffect(() => {
        const id = (props.match.params.nombreCiudad)
        const city = props.cities.filter(city => city._id === id)
        setCiudad(city[0])
        props.listarItinerarios(id)
        window.scrollTo(0, 0)
        console.log(city)
        console.log(props.itineraries)

    }, [])


    return (
        <div className="ciudadSin">
            <div className="tituloCiudad"><h1>{ciudad.name}</h1></div>

            <div className="ciudadUnica" style={{ backgroundImage: `url('${ciudad.url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>

            </div>
            {props.itineraries.length > 0 ?
                props.itineraries.map(itinerary => {
                    return <Itinerary itinerary ={itinerary}></Itinerary>
                })

                :
                <div className="itinerariesDiv">
                    <h2>Sorry, we have no itineraries yet...</h2>
                </div>

            }


            <Link to="/cities">
                <div className="divRedirect">
                    <img src={world} className="mundoCity"></img>
                    <p>Go back to cities</p>
                </div>

            </Link>
        </div >

    )

}

const mapStateToProps = state => {
    return {
        cities: state.cities.cities,
        itineraries: state.itinerary.itineraries
    }
}

const mapDispatchToProps = {

    listarCiudades: citiesActions.listarCiudades,
    listarItinerarios: itinerariesActions.listarItinerarios
}

export default connect(mapStateToProps, mapDispatchToProps)(City)