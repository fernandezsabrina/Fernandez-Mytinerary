
const Slide = (props) => {

    return (
        <>
            {props.slide.map(ciudad => {

                const ciudadInd = require(`../assets/${ciudad.replace(" ", "-")}.jpg`)
                console.log(ciudadInd)
                return (

                    <div className="contenedorImg" style={{display:"flex", alignItems: "center", justifyContent:"center", backgroundImage:`url(${ciudadInd.default})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <p style={{width: "100%", display: "inlineBlock",backgroundColor: "#894789c5", textAlign: "center"}}>{ciudad}</p>
                    
                    </div>
                )

            })}
        </>
    )

}

export default Slide