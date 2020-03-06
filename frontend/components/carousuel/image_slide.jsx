import React from "react"


const ImageSlide = ({imgUrls}) => {
    const styles = {
        backgroundImage: `url(${imgUrls})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }


    return(
        <div className="image-slide" styles={styles}></div>
    )   
}


export default ImageSlide 