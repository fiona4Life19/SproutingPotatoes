import React from "react"
import { Route, Link } from "react-router-dom"
import SignUpFormContainer from "./session/signup_form_container"
import SignInFormContainer from "./session/signin_form_container"
import { AuthRoute } from "../util/route_util"
import Modal from './modal/modal'
import HomeContainer from "./home/home_container"


const App = () => {
    return (
    <div>
        <Modal /> 
        <Route path="/" component={HomeContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <AuthRoute path= "/signin" component={SignInFormContainer} />
    </div>
    )
}

export default App 