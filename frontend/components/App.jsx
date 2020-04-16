import React from "react"
import { Route, Switch } from "react-router-dom"
import SignUpFormContainer from "./session/signup_form_container"
import SignInFormContainer from "./session/signin_form_container"
import { AuthRoute } from "../util/route_util"
import Modal from './modal/modal'
import HomeContainer from "./home/home_container"
import MovieShowContainer from "./movie_show/movie_show_container"
import GreetingContainer from "./greeting/greeting_container"


const App = () => {
    return (
    <div>
        <header>
           < Modal/>
           < GreetingContainer/>
        </header>

        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path= "/signin" component={SignInFormContainer} />
            <Route path="/movies/:movieId" component={MovieShowContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
    </div>
    )
}

export default App 