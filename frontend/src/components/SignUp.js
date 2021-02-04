const SignUp = () => {

    const paises = [
        "Argentina", "México", "Brasil", "United States", "Spain", "Canada", "United Kingdom", "Japan", "Germany", "China", "France", "Italy", "New Zealand"
    ]
    return (
        <div className="divPadre">
            <div className="containerForm">
                <h1>REGISTER</h1>
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="lastname"></input>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="picture url"></input>
                <input type="password" placeholder="password"></input>
                <select placeholder="country">
                <option disabled selected>country</option>
                    {paises.map(pais => {
                     
                        return(   <>
                           
                            <option>{pais}</option>
                            console.log(pais)
                            </>)
                     
                    })}
                </select>
                <button className="btnForm">Create Account</button>

            </div>

        </div>

    )
}

export default SignUp