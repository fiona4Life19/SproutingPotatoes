import React from "react";
import ReactDOM from "react-dom";
import {signup, signin, signout } from "./util/session_api_util"
import configureStore from "./store/store";
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore()

    ReactDOM.render(<Root store={store}/>, root);

    window.getState = store.getState
    window.dispatch = store.dispatch

    window.signup = signup 
    window.signout = signout
    window.signin = signin 

});