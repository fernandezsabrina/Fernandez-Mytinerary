import { useState } from "react"
import emptyLike from '../assets/emptyLike.png'
import clock from '../assets/clock.png'

const Itinerary = ({ itinerary }) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="itinerariesDiv">
            <div className="contenedorIt">
                <div className="divUserIti">
                    <div className="userPicIti" style={{ backgroundImage: `url(${itinerary.userPic})`, backgroundSize: "cover" }}></div>
                    <div><h2>{itinerary.userName}</h2></div>
                </div>
                <div className="divInfoIti">
                    <div><h1>{itinerary.title}</h1></div>
                    <div className="divLikes">
                        <div className="itineraryAdds">
                            <div><img src={emptyLike} style={{ width: "2.5vw", marginBottom: "1vh" }}></img></div>
                            <h4>{itinerary.likes}</h4>
                        </div>
                        <div className="itineraryAdds">
                            <div><img src={clock} style={{ width: "3vw", marginBottom: "1vh" }}></img></div>
                            <h4>{itinerary.duration}hs</h4>
                        </div>
                        <div className="itineraryAdds">
                            <div className="money">{Array(itinerary.price).fill("$")}</div>
                        </div>
                    </div>
                    <div className="hashtags">
                        {itinerary.hashtag.map(hash => {
                            return <h4>{hash}</h4>
                        })}
                    </div>

                </div>
            </div>
            {visible &&
                <div className="visible">
                    <div className="activities">
                        {itinerary.activities.map(({ activityPic, activityTitle }) => {
                            return (
                                <div className="activity">
                                    <div className="activityPic" style={{ backgroundImage: `url(${activityPic})`, backgroundSize: "cover" , backgroundPosition: "center"}}></div>
                                    <p>{activityTitle}</p>
                                </div>
                            )

                        })}

                    </div>
                    <div className="comments">
                        {itinerary.comments.length === 0 && <p>No comments yet...</p>}
                        <input type="text" name="campo_de_texto" value="You must be logged to create a comment..." readOnly="readOnly" /> 
                    </div>
                </div>}
            <div>
                <button className="botonIti" onClick={() => setVisible(!visible)}> <p>view all</p></button >
            </div>
        </div>
    )
}
export default Itinerary