import React from "react"

const ImageSlide = ({url}) => {
    const styles = {
        trailer: `${url}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div styles={styles}>
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/1AElONvi9WQ">
            </iframe>
        </div>   
    )   
}
        
        
export default ImageSlide;


// src = {styles.trailer}