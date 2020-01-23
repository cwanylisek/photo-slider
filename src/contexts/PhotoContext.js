import React, { createContext, useState, useEffect } from 'react'
import kircholm from '../assets/img/kircholm.jpg'
import landscape from '../assets/img/nature.jpg'
import ramen from '../assets/img/ramen.jpg'
import uuid from 'uuid/v1'

export const PhotoContext = createContext()

const PhotoContextProvider = (props) => {
    const [photos, setPhoto] = useState([
        { photo: kircholm, text: 'lorem ipsum 1', category: 'art', id: 1 },
        { photo: landscape, text: 'lorem ipsum 2', category: 'nature', id: 2 },
        { photo: ramen, text: 'lorem ipsum 3', category: 'food', id: 3 }
    ])

    const [photoIndex, setIndex] = useState(0)

    const [translateValue, setTranslate] = useState(0)

    const [newImage, setNewImage] = useState({})

    const [sliderWidth, setWidth] = useState(0)

    const addPhoto = (photo, text, category) => {
        setPhoto([...photos, { photo, text, category, id: uuid() }])
    }

    const filterPhotos = (category) => {
        setPhoto(photos.filter(photo => photo.category === category))
    }

    const deletePhoto = (index) => {

        let splicedPhotos = photos
        splicedPhotos.splice(index, 1)
        setPhoto([...splicedPhotos])

    }

    const rightArrow = () => {
        if (photoIndex === photos.length - 1) {
            setIndex(0)
            setTranslate(0)
        } else {
            setIndex(photoIndex + 1)
            setTranslate(translateValue + -(sliderWidth))
        }
    }

    const leftArrow = () => {
        if (photoIndex === 0) {
            return
        } else {
            setIndex(photoIndex - 1)
            setTranslate(translateValue + sliderWidth)
        }
    }

    const saveImage = (newImage) => {
        setNewImage(newImage)
    }

    const getSliderWidth = (width) => {
        setWidth(width)
    }

    useEffect(() => {
        const imageData = localStorage.getItem('photoBase64')
        if (imageData != null) {
            fetch(imageData)
                .then(res => res.blob())
                .then(res => setPhoto(photos => [...photos, { photo: URL.createObjectURL(res), text: 'from LS', category: 'LS', id: uuid() }]))
        }
        localStorage.removeItem('photoBase64')
    }, [])

    return (
        <PhotoContext.Provider value={{ photos, getSliderWidth, deletePhoto, filterPhotos, addPhoto, rightArrow, leftArrow, photoIndex, translateValue, newImage, saveImage }}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider;