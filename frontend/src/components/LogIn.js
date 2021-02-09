import { connect } from "react-redux"
import { useState } from "react"
import authActions from "../Redux/Actions/authActions"
import Swal from 'sweetalert2'
import GoogleLogin from 'react-google-login';

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            })
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(usuarioALoguear)


        if (respuesta && !respuesta.success) {
            setErrores([respuesta.mensaje])
        } else {
            Swal.fire(
                'Great!',
                'Welcome',
                'success'
            )
        }

    }

    const responseGoogle = async (response) => {
        if (response.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong...',
            })
        } else {
            const respuesta = await props.loginUser({
                username: response.profileObj.givenName,
                password: response.profileObj.googleId,
            })
            if (respuesta && !respuesta.success) {
                setErrores([respuesta.mensaje])
            } else {
                Swal.fire(
                    'Great!',
                    'Welcome',
                    'success'
                )
            }
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="containerLogin">
                <input type="text" name="username" placeholder="username" onChange={leerInput}></input>
                <input type="password" name="password" placeholder="password" onChange={leerInput}></input>
                <button className="btnForm" onClick={validarUser}>Log In</button>
                <GoogleLogin
                    clientId="372763810833-boon7d6mri0bq178iqb3ar61r89qsmtd.apps.googleusercontent.com"
                    buttonText="Log In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
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
