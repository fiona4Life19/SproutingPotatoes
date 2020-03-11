import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import {fetchMovies} from './util/movie_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preLoadedState = undefined;
    if (window.currentUser) {
        preLoadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
        window.currentUser = null;
    }
    const store = configureStore(preLoadedState)
    window.state = store.getState()
    window.fetchMovies = fetchMovies
    ReactDOM.render(<Root store={store}/>, root);
});