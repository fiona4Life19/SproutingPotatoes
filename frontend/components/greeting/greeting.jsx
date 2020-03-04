import React from "react"
import {Link} from "react-router-dom"


    const Greeting = ({currentUser, signout}) => {
        const session_links = () => (
            <nav className="nav">
                <Link to="/signin">Sign In!</Link>
                 &nbsp;or&nbsp;
                <Link to="/signup">Sign Up!</Link>
            </nav>
        ); 
        const personalGreeting = () => (
            <hgroup className="greeting"> 
                <h1>Hi! {currentUser.first_name}</h1> 
                <button onClick={signout}>Sign out!</button>
            </hgroup>
        )

        return currentUser ? personalGreeting() : session_links()
    }



export default Greeting