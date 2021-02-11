import { useEffect, useState } from "react"

const Comments = (props) => {

    // const [comments, setComments] = useState([])

    // useEffect(() => {
    //     setComments(props.comentario)
    // }, [props])

    return (
        <div className="commentUser">
            <div style={{ display: "flex" }}>
                <div style={{ backgroundImage: `url('${props.comentario.userID.urlpic}')`, backgroundSize: "cover", backgroundPosition: "center", width: "50px", height: "100%", borderRadius: "50px" }}></div>
                <div><p>{props.comentario.userID.name} says:</p></div>
                <div style={{ marginLeft: "1vw" }}>{props.comentario.comment}</div>
            </div>

        </div>
    )

}

export default Comments