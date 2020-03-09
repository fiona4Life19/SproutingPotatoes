import React from "react"
import { Link } from "react-router-dom"
import dropdown from "../dropdown/dropdown"
import Dropdown from "../dropdown/dropdown";


    const Greeting = ({currentUser, signout, openModal}) => {
        const session_links = () => (
            <div>
                <nav className="signin-signup">
                    <div className="left-nav">
                        <Link className="header-link" to="/"> Sprouting Potatoes! </Link>
                    </div>

                    <div className="search-box">
                        <input className="search-bar" type="text" name="" placeholder="Search movie or actor"/>
                            <i className="fas fa-search"></i>
                    </div>

                    <div className="right-nav"> 
                        <button className="greeting-btn" onClick={ () => openModal('signin')}>Sign In!</button>  
                        <p className="seperator">|</p>               
                        <button className="greeting-btn" onClick={ () => openModal('signup')}>Sign Up!</button>
                    </div>
                </nav>
            </div>
        ); 
        const personalGreeting = () => (
            <div>
                {/* <img src="./potato.png" alt=""/> */}
                <nav className="signin-signup"> 
                    <div className="left-nav">
                        <Link className="header-link" to="/"> Sprouting Potatoes!</Link>
                    </div>

                    <div className="search-box">
                        <input className="search-bar" type="text" name="" placeholder="Search movie or actor" />
                        <i className="fas fa-search"></i>
                    </div>

                    <div className="right-nav-signedin">
                            <i className="fas fa-user"></i>
                                &nbsp;&nbsp;

                                <div className="dropdown-trigger">
                                    <button className="dropdown-btn" >{currentUser.first_name}</button>
                                    <ul className="dropdown-items">
                                        <li>profile</li>
                                        <li>reviews</li>
                                        <li>
                                        <button class="signout-btn" onClick={signout}>signout</button>
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