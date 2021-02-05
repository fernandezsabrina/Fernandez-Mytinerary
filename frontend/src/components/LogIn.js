const LogIn = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="containerLogin">
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button className="btnForm">Log In</button>
            </div>
        </div>

    )

}

export default LogIn