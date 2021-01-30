import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Cities from './components/Cities'
import City from './components/City'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import citiesActions from './Redux/Actions/citiesActions';
import { useEffect } from 'react';

const App =(props) =>{

  useEffect(() => {
    props.listarCiudades()
  }, [])

  return (
    <> 
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:nombreCiudad" component={City} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = state => {
  return {
    cities: state.cities.cities
  }
}

const mapDispatchToProps = {
  listarCiudades: citiesActions.cities
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
