import React, { useContext, useEffect } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'
import Slide from '../Slide/Slide'
import './Slider.scss'

const Slider = () => {

    const { photos, leftArrow, rightArrow, translateValue, deletePhoto, getSliderWidth } = useContext(PhotoContext)

    const deletePhotoHandler = (id) => {
        deletePhoto(id)
    }

    const slide = photos.map((photo, i) => (
        <Slide
            key={photo.id}
            image={photo.photo}
            text={photo.text}
            category={photo.category}
            click={() => deletePhotoHandler(i)}
        />
    ))

    const slideAnimation = {
        transform: `translateX(${translateValue}px)`,
        transition: 'transform ease-in-out 0.2s'
    }

    useEffect(() => {
        const responsiveSliderWidth = document.querySelector(".slider").clientWidth
        getSliderWidth(responsiveSliderWidth)
    })



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