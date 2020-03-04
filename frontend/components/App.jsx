import React from "react"
import GreetingContainer from './greeting/greeting_container'
import {Route} from "react-router-dom"
import SignUpFormContainer from "./session/signup_form_container"
import SignInFormContainer from "./session/signin_form_container"
import Home from "./home/home"
import NavBarContainer from "./nav_bar/nav_bar_container"
import {AuthRoute,
        ProtectedRoute
        } from "../util/route_util"

const App = () => {
    return (
    <div>
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
        {/* <ProtectedRoute path="/reviews" component={ReviewsContainer}/> */}
        <AuthRoute path= "/signin" component={SignInFormContainer} />
    </div>
    )
}

export default App 