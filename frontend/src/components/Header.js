import imagen from '../assets/userblue.png'
import logo from '../assets/logomytinerary.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import authActions from '../Redux/Actions/authActions'

const Header = (props) => {
    if (props.loggedUser) {
        var links = <>
            <p className="logoutLink" onClick={() => props.logoutUser()}>Log Out</p>
        </>
    } else {
        var links = <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </>
    }
    return (
        <>
            <header>
                {props.loggedUser ?
                    <div className="centradoUser">
                        <div className="fotoUsuario" style={{ backgroundImage: `url(${props.loggedUser.urlpic})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <p>Hello {props.loggedUser.username}!</p>
                    </div>
                    :
                    <div><img className="fotoNoUsuario" src={imagen}></img></div>
                }

                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/cities">Cities</NavLink>
                    {links}

                </nav>

            </header>
            <div className="divLogo">
                <img className="fotoLogo" src={logo}></img>
                <p>Find your perfect trip, designed by insiders who know and love their cities.</p>


            </div>

        </>
    )
}
const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {
    logoutUser: authActions.logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)