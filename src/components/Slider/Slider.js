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
            <button className="slider__left-arrow" onClick={leftArrow}>strzałka w lewo</button>
            <button className="slider__right-arrow" onClick={rightArrow}>strzałka w prawo</button> 
        </div>
    )

}

export default Slider