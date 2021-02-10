import { connect } from "react-redux"
import { useState } from "react"
import authActions from "../Redux/Actions/authActions"
import Swal from 'sweetalert2'
import GoogleLogin from 'react-google-login';

const SignUp = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({})
    const [errores, setErrores] = useState([])

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
        if (nuevoUsuario.name === '' || nuevoUsuario.username === '' || nuevoUsuario.lastname === ''
            || nuevoUsuario.email === '' || nuevoUsuario.urlpic === '' || nuevoUsuario.password === ''
            || nuevoUsuario.country === '' || !nuevoUsuario.name || !nuevoUsuario.username || !nuevoUsuario.lastname
            || !nuevoUsuario.email || !nuevoUsuario.password || !nuevoUsuario.country || !nuevoUsuario.urlpic) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            })
            return false
        }

        setErrores([])
        const respuesta = await props.newUser(nuevoUsuario)
        console.log(respuesta)
        if (respuesta && !respuesta.success) {
            setErrores(respuesta.errores)
        } else {
            
            Swal.fire(
                'Great!',
                'New account created',
                'success'
            )
        }

    }

    const paises = [
        "Argentina", "México", "Brasil", "United States", "Spain", "Canada", "United Kingdom", "Japan", "Germany", "China", "France", "Italy", "New Zealand"
    ]
    const responseGoogle = async (response) => {
        if (response.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong...',
            })
        } else {
            const respuesta = await props.newUser({
                username: response.profileObj.givenName,
                name: response.profileObj.givenName,
                lastname: response.profileObj.familyName,
                password: response.profileObj.googleId,
                urlpic: response.profileObj.imageUrl,
                email: response.profileObj.email
            })
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.errores)
            } else {
                Swal.fire(
                    'Great!',
                    'New account created',
                    'success'
                )
            }
        }
    }
    return (
        <div className="divPadre">
            <form className="containerForm">
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
                        </>)
                    })}
                </select>
                <button className="btnForm" onClick={validarUser}>Create Account</button>
                <GoogleLogin
                    clientId="372763810833-boon7d6mri0bq178iqb3ar61r89qsmtd.apps.googleusercontent.com"
                    buttonText="Create Account with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
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
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {
    newUser: authActions.newUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)