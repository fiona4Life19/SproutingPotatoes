import React from "react"
import GreetingContainer from './greeting/greeting_container'
import { Route, Link } from "react-router-dom"
import SignUpFormContainer from "./session/signup_form_container"
import SignInFormContainer from "./session/signin_form_container"
import { AuthRoute } from "../util/route_util"
import Modal from './modal/modal'
// import Slider from "./slider/slider"


const App = () => {
    return (
    <div>
        <Modal /> 
        <header>
            <Link to="/" > <h1>Sprouting Potatoes</h1>
        </Link>
        <GreetingContainer />
        </header>
        {/* <Slider /> */}
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <AuthRoute path= "/signin" component={SignInFormContainer} />
    </div>
    )
}

export default App 