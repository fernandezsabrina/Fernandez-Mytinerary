import Carousel from "react-bootstrap/Carousel"
import Slide from './Slide'




const Carrusel = () => {

  const ciudades = [
    ['tokyo', 'buenos aires', 'praga', 'paris'],

    ['barcelona', 'rome', 'sao paulo', 'dubai'],

    ['amsterdam', 'new york', 'london', 'venice']

  ]

  return (

    <div className="divCarrusel">
      <h2 className="textoCarrusel">POPULAR MYTINERARIES</h2>
      <Carousel>
        {ciudades.map((slide, i) => {

          return (

            <Carousel.Item key={i} className="contenedorPadre" interval={2500}>
              <div className="contenedorSlide">
                <Slide slide={slide} />
              </div>
            </Carousel.Item>
          )
        })}

      </Carousel>
    </div>

  )

}
export default Carrusel