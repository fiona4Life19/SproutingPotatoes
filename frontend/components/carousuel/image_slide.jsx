import React from "react"

const ImageSlide = ({url}) => {
    const styles = {
        backgroundImage: `${url}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div styles={styles}>
            <iframe className="trailer-slides"
                src={styles.backgroundImage}>
            </iframe>
        </div>   
    )   
}
        
        
export default ImageSlide;
