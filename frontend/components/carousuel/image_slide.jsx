import React from "react"

const ImageSlide = ({url}) => {
    const styles = {
        backgroundImage: `${url}`,
    }

    return (
        <div styles={styles} className="image-slide">
            <iframe className="trailer-slides"
                src={styles.backgroundImage}>
            </iframe>
        </div>   
    )   
}
        
        
export default ImageSlide;
