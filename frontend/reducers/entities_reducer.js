import { combineReducers } from "redux";
import usersReducer from "./users_reducer"
import moviesReducer from "./movies_reducer"
import reviewsReducer from "./reviews_reducer";
import actorsReducer from "./actors_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    reviews: reviewsReducer,
    actors: actorsReducer,
})

export default entitiesReducer


