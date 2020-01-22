import React, { useContext, useEffect } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'
import Slide from '../Slide/Slide'
import './Slider.scss'

const Slider = () => {

    const { photos, leftArrow, rightArrow, translateValue } = useContext(PhotoContext)

    const slide = photos.map((photo) => (
        <Slide key={photo.id} image={photo.photo} text={photo.text} category={photo.category} />
    ))

    const slideAnimation = {
        transform: `translateX(${translateValue}px)`,
        transition: 'transform ease-in-out 0.2s'
    }

    return (
        <div className="slider"> 
            <div className="slider__container" style={slideAnimation}>
                {slide}
            </div>
            <div className="slider__arrow slider__arrow-left" onClick={leftArrow}></div>
            <div className="slider__arrow slider__arrow-right" onClick={rightArrow}></div> 
        </div>
    )

}

export default Slider