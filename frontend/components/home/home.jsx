import React from 'react'
import GreetingContainer from '../greeting/greeting_container'
import Carousuel from "../carousuel/carousuel"


const Home = () => (
    <div className="home">
        <GreetingContainer/>
        <Carousuel/>
        <div className="potato-img-frame">
        </div>
    </div>
)

export default Home