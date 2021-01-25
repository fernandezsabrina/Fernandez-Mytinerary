const Slide = (props) => {

    return (
        <>
            {props.slide.map((ciudad, i) => {
                const ciudadInd = require(`../assets/${ciudad.replace(" ", "-")}.jpg`)
                return (
                    <div key={i} className="contenedorImg" style={{
                        backgroundImage: `url(${ciudadInd.default})`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover"
                    }}>
                        <p className="pCarrusel">{ciudad}</p>
                    </div>
                )
            })}
        </>
    )

}

export default Slide