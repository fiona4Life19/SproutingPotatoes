import React from "react";
import ReactDOM from "react-dom";
// import {signup, signin, signout } from "./util/session_api_util"
// import {signup} from './actions/sessions_actions'
import configureStore from "./store/store";
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState)
    ReactDOM.render(<Root store={store}/>, root);

});