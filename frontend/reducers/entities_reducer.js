import { combineReducers } from "redux";
import usersReducer from "./users_reducer"
import moviesReducer from "./movies_reducer"
import reviewsReducer from "./reviews_reducer";
import actorsReducer from "./actors_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    actors: actorsReducer,
    reviews: reviewsReducer
})

export default entitiesReducer


