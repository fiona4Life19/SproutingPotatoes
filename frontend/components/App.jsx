import React from "react"
import GreetingContainer from './greeting/greeting_container'
import {Route} from "react-router-dom"
import SignUpFormContainer from "./session/signup_form_container"
import SignInFormContainer from "./session/signin_form_container"
import NavBarContainer from "./navbar/nav_bar-1"
import Home from "./home/home"
import {AuthRoute,
        ProtectedRoute
        } from "../util/route_util"

const App = () => {
    return (
    <div>
        <GreetingContainer/>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        {/* <ProtectedRoute path="/reviews" component={ReviewsContainer}/> */}
        <AuthRoute path= "/signin" component={SignInFormContainer} />
    </div>
    )
}

export default App 