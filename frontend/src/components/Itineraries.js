import { useEffect, useState } from "react"
import emptyLike from '../assets/emptyLike.png'
import clock from '../assets/clock.png'
import money from '../assets/money.png'


const Itinerary = (props) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="itinerariesDiv">
            <div className="divUserIti">
                <div className="userPicIti" style={{ backgroundImage: `url(${props.itinerary.userPic})`, backgroundSize: "cover" }}></div>
                <div><h2>{props.itinerary.userName}</h2></div>
            </div>
            <div className="divInfoIti">
                <div><h1>{props.itinerary.title}</h1></div>
                <div className="divLikes">
                    <div className="itineraryAdds">
                        <div><img src={emptyLike} style={{ width: "2.5vw", marginBottom: "1vh" }}></img></div>
                        <h4>{props.itinerary.likes}</h4>
                    </div>
                    <div className="itineraryAdds">
                        <div><img src={clock} style={{ width: "3vw", marginBottom: "1vh" }}></img></div>
                        <h4>{props.itinerary.duration}hs</h4>
                    </div>
                    <div className="itineraryAdds">
                        <div><img src={money} style={{ width: "3vw", marginBottom: "1vh" }}></img></div>
                        <h4>{props.itinerary.price}</h4>
                    </div>
                </div>
                <div className="hashtags"><h4>{props.itinerary.hashtag}</h4></div>
                {/* { visible &&
                <div>
                    <p>Hola</p>
                </div>
            } */}
            <button className="botonIti" onClick={() => setVisible(!visible)}><p>view all</p></button>
            </div>
            
        </div>


    )
}

export default Itinerary