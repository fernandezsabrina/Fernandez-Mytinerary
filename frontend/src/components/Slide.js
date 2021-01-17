
const Slide = (props) => {

    return (
        <>
            {props.slide.map((ciudad, i) => {

                const ciudadInd = require(`../assets/${ciudad.replace(" ", "-")}.jpg`)
                return (

                    <div key={i} className="contenedorImg" style={{
                        display: "flex", alignItems: "center",
                        justifyContent: "center", backgroundImage: `url(${ciudadInd.default})`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover"
                    }}>
                        <p style={{
                            width: "100%", display: "inlineBlock",
                            backgroundColor: "#894789c5", textAlign: "center"
                        }}>{ciudad}</p>
                    </div>
                )

            })}
        </>
    )

}

export default Slide