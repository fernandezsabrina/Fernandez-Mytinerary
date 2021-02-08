import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Cities from './components/Cities'
import City from './components/City'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const App = (props) => {
  if (props.loggedUser) {
    var routes = <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cities" component={Cities} />
      <Route path="/city/:nombreCiudad" component={City} />
      <Redirect to="/" />
    </Switch>
  } else {
    var routes = <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cities" component={Cities} />
      <Route path="/city/:nombreCiudad" component={City} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Redirect to="/" />
    </Switch>
  }
  console.log("estado actual de redux:",props)
  return (
    <>
      <BrowserRouter>
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser
  }
}


export default connect(mapStateToProps)(App)
