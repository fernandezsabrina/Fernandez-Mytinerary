import { useEffect, useState } from "react"



const Itinerary = () => {
    const [itineraries, setItineraries] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/itineraries')
            .then(respuesta => respuesta.json())
            .then(data => setItineraries(data.respuesta))
    }, [])

    console.log(itineraries)
    return (
        <div className="itinerariesDiv">
            <div className="divUserIti">
                <div className="userPicIti"></div>
                <div><h2>UserName</h2></div>
                </div>
            <div className="divInfoIti">
                <div><h1>Itinerary Name</h1></div>
                <div className="divLikes">
                    <div><h4>Likes</h4></div>
                    <div><h4>Duration</h4></div>
                    <div><h4>Price</h4></div>
                </div>
                <div><h4>#Hashtags</h4></div>
                <button className="botonIti"><p>view all</p></button>
            </div>
        </div>
    )
}

export default Itinerary