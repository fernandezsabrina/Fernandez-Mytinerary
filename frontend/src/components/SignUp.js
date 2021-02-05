import { connect } from "react-redux"
import { useState } from "react"
import authActions from "../Redux/Actions/authActions"
import Swal from 'sweetalert2'

const SignUp = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({})

    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: valor
        })

    }

    const validarUser = async e => {
        e.preventDefault()
        if (nuevoUsuario.name === '' || nuevoUsuario.username === '' || nuevoUsuario.lastname === '' || nuevoUsuario.email === '' || nuevoUsuario.urlpic === '' || nuevoUsuario.password === '' || nuevoUsuario.country === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Every field is required!',
            })
            return false
        }
        const respuesta = await props.newUser(nuevoUsuario)
        console.log(respuesta)
    }

    const paises = [
        "Argentina", "México", "Brasil", "United States", "Spain", "Canada", "United Kingdom", "Japan", "Germany", "China", "France", "Italy", "New Zealand"
    ]
    return (
        <div className="divPadre">
            <div className="containerForm">
                <h1>REGISTER</h1>
                <input type="text" name="username" placeholder="username" onChange={leerInput} ></input>
                <input type="text" name="name" placeholder="name" onChange={leerInput}></input>
                <input type="text" name="lastname" placeholder="lastname" onChange={leerInput} ></input>
                <input type="text" name="email" placeholder="email" onChange={leerInput} ></input>
                <input type="text" name="urlpic" placeholder="picture url" onChange={leerInput} ></input>
                <input type="password" name="password" placeholder="password" onChange={leerInput} ></input>
                <select name="country" placeholder="country" onChange={leerInput} >
                    <option disabled selected>country</option>
                    {paises.map(pais => {
                        return (<>
                            <option>{pais}</option>
                            console.log(pais)
                            </>)
                    })}
                </select>
                <button className="btnForm" onClick={validarUser}>Create Account</button>

            </div>

        </div>

    )
}


const mapDispatchToProps = {
    newUser: authActions.newUser
}

export default connect(null, mapDispatchToProps)(SignUp)