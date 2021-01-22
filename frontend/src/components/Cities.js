import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Cities = () => {

    const [ciudades, setCiudades] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cities')
        .then(response => response.json())
        .then(data => setCiudades(data.respuesta))
        

    }, [])

    return (
        <>
            <div className="cities">
                <h1 style={{ color: "#894789", fontWeight: "bold", fontSize: "3vw" }}>CITIES</h1>
                {ciudades.map(({ name, url, _id }) => {
                    return (
                        <div className="divCiudad" style={{ backgroundImage: `url('${url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <Link to={`/city/${_id}`} style={{width: "100%"}}><p style={{
                                width: "100%", color: "white", height: "7vh", display: "inlineBlock",
                                backgroundColor: "#89478981", textAlign: "center"
                            }}>{name}</p></Link>
                            </div>
                    )

                })}

            </div>
        </>
    )
}

export default Cities