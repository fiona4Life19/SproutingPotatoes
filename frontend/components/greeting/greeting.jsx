import React from "react"
import { Link } from "react-router-dom"


    const Greeting = ({currentUser, signout, openModal}) => {
        const session_links = () => (
            <div>
                <nav className="signin-signup">
                    <div className="left-nav">
                        <Link className="header-link" to="/"> Sprouting Potatoes</Link>
                    </div>

                    <div className="right-nav"> 
                        <button className="greeting-btn" onClick={ () => openModal('signin')}>Sign In</button>                
                        <button className="greeting-btn" onClick={ () => openModal('signup')}>Sign Up</button>
                    </div>
                </nav>
            </div>
        ); 
        
        const personalGreeting = () => (
            <div>
                {/* <img src="./potato.png" alt=""/> */}
                <nav className="signin-signup"> 
                    <div className="left-nav">
                        <Link className="header-link" to="/"> Sprouting Potatoes </Link>
                    </div>

                    <div className="right-nav-signedin">
                            <i className="fas fa-user"></i>

                                <div className="dropdown-trigger">
                                     <button className="dropdown-btn" >{currentUser.first_name} 
                                        <span className="dropdown-arrow">  ▾ </span>
                                     </button>
                                   
                                    <ul className="dropdown-items">
                                        <li className="dropdown-li">

                                        <div className="upper-dropdown">  
                                            <i className="dropdown-user fas fa-user fa-3x"> </i> 
                                            <p className="dropdown-name">{currentUser.first_name} {currentUser.last_name}</p>
                                        </div>  
                                            
                                            <button className="signout-btn" onClick={signout}>
                                                <span href="#" className="inner-button">Log Out</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                    </div>
                </nav>
            </div>
        )

        return currentUser ? personalGreeting() : session_links()
    }



export default Greeting