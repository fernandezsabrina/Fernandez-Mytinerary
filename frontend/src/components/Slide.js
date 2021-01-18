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
                            width: "100%", height:"5vh", display: "inlineBlock",
                            backgroundColor: "#89478981", textAlign: "center"
                        }}>{ciudad}</p>
                    </div>
                )
            })}
        </>
    )

}

export default Slide