import React from 'react'
import { Link } from "react-router-dom"

export default ({ currentUser, signout}) => {
    const display = currentUser ? (
        <div>
            <h3>{currentUser.first_name}</h3>
            <button onClick={signout} > signout </button>
        </div>
    ) : (
        <div>
            <Link className="button" to="/signup">Sign Up</Link>
            &nbsp; or &nbsp;
            <Link className="button" to="/signin">Sign In</Link>
        </div>
    ); 

    return ( 
        <header className="nav-bar" >      
            <div>
                {display}
            </div>
        </header>
    )
}