import React from "react"


    const Greeting = ({currentUser, signout, openModal}) => {
        const session_links = () => (
            <nav className="signin-signup">
                <button onClick={ () => openModal('signin')}>Sign In</button>                 
                    &nbsp;&nbsp; &nbsp;&nbsp;
                <button onClick={ () => openModal('signup')}>Sign Up</button>
            </nav>
        ); 
        const personalGreeting = () => (
            <hgroup className="greeting"> 
                <h3>Hi! {currentUser.first_name}</h3> 
                <button className="signout-button" onClick={signout}>Sign out</button>
            </hgroup>
        )

        return currentUser ? personalGreeting() : session_links()
    }



export default Greeting