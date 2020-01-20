import React, { useContext } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'
import Slide from '../Slide/Slide'
import './Slider.scss'

const Slider = () => {

    const { photos } = useContext(PhotoContext)

    const slide = photos.map((photo) => (
        <Slide key={photo.id} image={photo.photo} />
    ))

    return (
        <div className="slider">
            <div className="slider__container">
                {slide}
            </div>
            <div className="slider__text">
               
            </div>
        </div>
    )

}

export default Slider