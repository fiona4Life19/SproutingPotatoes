import React from "react"

const ActorsIndexItem = ({actor}) => {
    debugger
    return (
        <div className="actors-container">
                <img className="actor-pic" src={actor.photoUrl} alt=""/>
                <span className="actor-info">{actor.first_name} {actor.last_name} </span>
        </div>
    )
}

export default ActorsIndexItem