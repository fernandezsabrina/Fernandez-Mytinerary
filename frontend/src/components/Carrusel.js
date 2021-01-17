import Carousel from "react-bootstrap/Carousel"
import Slide from './Slide'




const Carrusel = () => {

  const ciudades = [
    ['tokyo', 'buenos aires', 'praga', 'paris'],

    ['barcelona', 'rome', 'sao paulo', 'dubai'],

    ['amsterdam', 'new york', 'london', 'venecia']

  ]

  return (

    <Carousel>
      {ciudades.map(slide => {

        return (

          <Carousel.Item className="contenedorPadre">
            <div id="contenedorSlide">
              <Slide slide={slide} />
            </div>
          </Carousel.Item>
        )
      })}

    </Carousel>


  )

}
export default Carrusel