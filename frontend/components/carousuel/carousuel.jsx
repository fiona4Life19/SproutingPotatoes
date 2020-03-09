import React from "react"
import ImageSlide from "./image_slide"
import Arrow from "./arrow"

const imgUrls = ["https://www.vintagemovieposters.co.uk/wp-content/uploads/2016/03/IMG_1143.jpg", "https://i.etsystatic.com/13513569/r/il/879723/1116897704/il_1588xN.1116897704_4zna.jpg", "https://images-na.ssl-images-amazon.com/images/I/81Zqwo1ovGL._SL1500_.jpg"]

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