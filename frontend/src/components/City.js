import { useEffect, useState } from "react"

const City = (props) => {
    const [ciudad, setCiudad] = useState({})

    useEffect(() => {
        const id = parseInt(props.match.params.nombreCiudad)
        fetch('http://localhost:4000/city/'+id)
            .then(respuesta => respuesta.json())
            .then(data => setCiudad(data.respuesta))

    })
    console.log(ciudad)

    return (
        <div>
            <h1>{ciudad.name}</h1>
            <div className="divCiudad" style={{ backgroundImage: `url('${ciudad.url}')`, backgroundSize: "cover", backgroundPosition: "center" }}>

            </div>
        </div>

    )

}

export default City