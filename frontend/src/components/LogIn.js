import { connect } from "react-redux"
import { useState } from "react"
import authActions from "../Redux/Actions/authActions"
import Swal from 'sweetalert2'

const LogIn = (props) => {
    const [usuarioALoguear, setUsuarioALoguear] = useState({})
    const [errores, setErrores] = useState([])

    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setUsuarioALoguear({
            ...usuarioALoguear,
            [campo]: valor
        })

    }

    const validarUser = async e => {
        e.preventDefault()
        if (usuarioALoguear.username === '' || usuarioALoguear.password === '') {
            alert("all fields are required")
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(usuarioALoguear)


        if (respuesta && !respuesta.success) {
            setErrores([respuesta.mensaje])
        } else {
            alert("welcome")
        }

    }
    console.log(props)
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="containerLogin">
                <input type="text" name="username" placeholder="username" onChange={leerInput}></input>
                <input type="password" name="password" placeholder="password" onChange={leerInput}></input>
                <button className="btnForm" onClick={validarUser}>Log In</button>
                <div className="errores">
                    {errores.map(error => {
                        return (<h2>{error}</h2>)
                    })}

                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {
    loginUser: authActions.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
