import React from 'react'

const Slide = ({ image, text, category, click }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

return (
        <div className="slider__photo" style={styles}>
            <h1 className="slider__text">{text}</h1>
            <h2 className="slider__category">{category}</h2>
            <div className="slider__delete" onClick={click}></div>
        </div>
    )
}

export default Slide