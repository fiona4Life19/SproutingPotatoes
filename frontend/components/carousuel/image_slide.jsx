import React from "react"

const ImageSlide = ({url}) => {
    const styles = {
        backgroundImage: `${url}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div styles={styles}>
            <img className="image-slide" src={styles.backgroundImage} alt=""/>
        </div>
    )   
}


export default ImageSlide 