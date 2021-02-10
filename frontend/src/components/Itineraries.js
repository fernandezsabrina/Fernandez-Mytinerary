import { useState } from "react"
import { connect } from 'react-redux'
import itinerariesActions from '../Redux/Actions/itineraryActions'
import emptyLike from '../assets/emptyLike.png'
import clock from '../assets/clock.png'

const Itinerary = (props) => {
    console.log(props)
    const [visible, setVisible] = useState(false)

    return (
        <div className="itinerariesDiv">
            <div className="contenedorIt">
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
                            <div className="money">{Array(props.itinerary.price).fill("$")}</div>
                        </div>
                    </div>
                    <div className="hashtags">
                        {props.itinerary.hashtag.map(hash => {
                            return <h4>{hash}</h4>
                        })}
                    </div>

                </div>
            </div>
            {visible &&
                <div className="visible">
                    <div className="activities">
                        {props.itinerary.activities.map(({ activityPic, activityTitle }) => {
                            return (
                                <div className="activity">
                                    <div className="activityPic" style={{ backgroundImage: `url(${activityPic})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                    <p>{activityTitle}</p>
                                </div>
                            )

                        })}

                    </div>
                    <div className="comments">
                        {props.itinerary.comments.length === 0 ? <p>No comments yet...</p>
                            :
                            <div className="commentBox"></div>}
                        {props.loggedUser ? <input type="text" name="comment" placeholder="Write your comment here..."></input>
                            :
                            <input type="text" name="campo_de_texto" value="You must be logged to create a comment..." readOnly="readOnly" />}

                    </div>
                </div>}
            <div>
                <button className="botonIti" onClick={() => setVisible(!visible)}> <p>view all</p></button >
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
}

const mapDispatchToProps = {

    crearComentario: itinerariesActions.crearComentario
}




export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)