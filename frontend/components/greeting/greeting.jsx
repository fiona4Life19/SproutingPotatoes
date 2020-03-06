import React from "react"
import { Link } from "react-router-dom"


    const Greeting = ({currentUser, signout, openModal}) => {
        const session_links = () => (
            <div>
                <nav className="signin-signup">
                    <div className="left-nav">
                        <Link className="header-link" to="/"> Sprouting Potatoes! </Link>
                    </div>
                    <div className="right-nav"> 
                        <button className="greeting-btn" onClick={ () => openModal('signin')}>Sign In!</button>                 
                        <button className="greeting-btn" onClick={ () => openModal('signup')}>Sign Up!</button>
                    </div>
                </nav>
            </div>
        ); 
        const personalGreeting = () => (
            <div>
                <nav className="signin-signup"> 
                    <div className="left-nav">
                        <Link className="header-link" to="/"> Sprouting Potatoes!</Link>
                    </div>
                    <div className="right-nav">
                        <h4 className="greeting-title">Hi! {currentUser.first_name}</h4> 
                        <button className="greeting-btn" onClick={signout}>Sign out!</button>
                    </div>
                </nav>
            </div>
        )

        return currentUser ? personalGreeting() : session_links()
    }



export default Greeting