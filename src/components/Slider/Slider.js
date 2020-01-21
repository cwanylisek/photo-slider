import React, { useContext, useEffect } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'
import Slide from '../Slide/Slide'
import './Slider.scss'

const Slider = () => {

    const { photos, leftArrow, rightArrow, translateValue } = useContext(PhotoContext)

    const slide = photos.map((photo) => (
        <Slide key={photo.id} image={photo.photo} text={photo.text} category={photo.category} />
    ))

    return (
        <div className="slider">
            <div className="slider__container">
                {slide}
            </div>
            <button onClick={leftArrow}>strzałka w lewo</button>
            <button onClick={rightArrow}>strzałka w prawo</button>  
        </div>
    )

}

export default Slider