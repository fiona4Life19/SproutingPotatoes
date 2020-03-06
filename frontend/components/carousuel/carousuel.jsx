import React from "react"
import ImageSlide from "./image_slide"
import Arrow from "./arrow"

const imgUrls = ["https://i.insider.com/5ba91dd19c888d77108b4574?width=1100&format=jpeg&auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVnto_m7Zs0OuYp1XTLcgQyEUdkn414psV0PajzpYLrnMqFcUm",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHyG9hu2KHVgDm23uOCPJIY8sc73mRVzsP3qI9t1DukQI5r_vs",
    "https://www.studiomoviegrill.com/content/6f328dd0-b082-44a2-968b-d78381340a14.jpg"]

class Carousuel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImageIndex: 0
        }

        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide() {
        const lastImgIdx = imgUrls.length-1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0; 
        const index = shouldResetIndex ? lastImgIdx : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        })
    }

    nextSlide() {
        const lastImgIndex = imgUrls.length-1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastImgIndex; 
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        })
    }

    render() {
        return (
            <div className="carousuel">
                <Arrow 
                    direction="left"
                    clickFunction={this.previousSlide}
                    icon="&#9664;"
                />

                <ImageSlide imgUrls={imgUrls[this.state.currentImageIndex]} />

                <Arrow 
                    direction="right"
                    clickFunction={this.nextSlide} 
                    icon="&#9654;"
                />
            </div>
        )
    }
}


export default Carousuel