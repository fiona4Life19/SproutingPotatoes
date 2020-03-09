import React from 'react'
import GreetingContainer from '../greeting/greeting_container'
import Carousuel from "../carousuel/carousuel"
import Slider from "../slider/slider"


const Home = () => (
    <div className="home">
        <GreetingContainer/>
        <Carousuel/>
        <div className="potato-img-frame">
        </div>
    </div>
)

export default Home