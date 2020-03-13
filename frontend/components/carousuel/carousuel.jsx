import React from "react"
import ImageSlide from "./image_slide"
import Arrow from "./arrow"

const imgUrls = ["https://www.youtube.com/embed/lc0UehYemQA", "https://www.youtube.com/embed/szby7ZHLnkA"]


class Carousuel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }

        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide(e) {
        e.preventDefault()
        let index = this.state.activeIndex;
        let slidesLength = imgUrls.length

        if (index < 1) {
            index = slidesLength
        }

        index -=1;

        this.setState({
            activeIndex: index
        })
    }

    nextSlide(e) {
        e.preventDefault()
        let index = this.state.activeIndex;
        let slidesLength = imgUrls.length - 1; 

        if (index === slidesLength) {
            index = -1;
        }

        index += 1;

        this.setState({
            activeIndex: index
        })
    }


    render() {
        return (
            <div className="carousuel">
                <Arrow 
                    direction="left"
                    clickFunction={ e => this.previousSlide(e)}
                    icon="&#9664;"
                />

                <ImageSlide url={imgUrls[this.state.activeIndex]} />

                <Arrow 
                    direction="right"
                    clickFunction={e => this.nextSlide(e)} 
                    icon="&#9654;"
                />
            </div>
        )
    }
}


export default Carousuel