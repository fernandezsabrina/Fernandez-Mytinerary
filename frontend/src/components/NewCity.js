import { connect } from "react-redux"
import { useState } from "react"
import citiesActions from "../Redux/Actions/citiesActions"
import Swal from 'sweetalert2'

const NewCity = (props) => {
    const [nuevaCiudad, setNuevaCiudad] = useState({})
    const [errores, setErrores] = useState([])

    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setNuevaCiudad({
            ...nuevaCiudad,
            [campo]: valor
        })

    }

    const validarCiudad = async e => {
        e.preventDefault()
        if (nuevaCiudad.name === '' || nuevaCiudad.url === '' || !nuevaCiudad.name || !nuevaCiudad.url) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            })
            return false
        }

        setErrores([])
        const respuesta = await props.nuevaCiudad(nuevaCiudad)
        if (respuesta && !respuesta.success) {
            setErrores(respuesta.errores)
        } else {
            Swal.fire(
                'Great!',
                'New city created',
                'success'
            )
        }
        
    }

    return (
        <div className="divPadre">
            <form className="containerForm">
                <h1>Create a new city</h1>
                <input type="text" name="name" placeholder="city name" onChange={leerInput} ></input>
                <input type="text" name="url" placeholder="city url pic" onChange={leerInput}></input>
                <button className="btnForm" onClick={validarCiudad}>Create City</button>
                <div className="errores">
                    {errores.map(error => {
                        return (<h2>{error}</h2>)
                    })}

                </div>

            </form>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser,
        newCity: state.cities.nuevaCiudad
    }
}

const mapDispatchToProps = {
    nuevaCiudad: citiesActions.nuevaCiudad
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCity)